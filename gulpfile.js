var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify')
var cssmin = require('gulp-cssmin');
var htmlreplace = require('gulp-html-replace');
var order = require("gulp-order");

var uglifyConfig = [
    'static/js/jquery.min.js',
    'static/js/jquery.cookie.js',
    'static/js/swiper.min.js',
    'static/js/jquery.lazyload.js',
]
gulp.task('clean', function () {
    return gulp.src('app/css/*')
        .pipe(clean());
});

gulp.task('cleanDist',()=>{
    return gulp.src('dist/*')
    .pipe(clean());
})


gulp.task('concat', function () {
    gulp.src([
            'static/js/jquery.min.js',
            'static/js/swiper.min.js',
            'static/js/jquery.lazyload.min.js',
            'static/js/jquery.cookie.js',
        ])
        .pipe(order([
            'static/js/jquery.min.js',
            'static/js/swiper.min.js',
            'static/js/jquery.lazyload.min.js',
            'static/js/jquery.cookie.js',
        ],{ base: './' }))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('static/js'))
        // .pipe(uglify())
        // .pipe(gulp.dest('static/js'))

})

gulp.task('concatjs',['cleanDist'] ,function () {
    gulp.src('./app/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))

})


gulp.task('concatcss',['sass'],function(){
    gulp.src('./app/css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css'))
        // .pipe(uglify())
        // .pipe(cleanCSS())
        // .pipe(gulp.dest('static/css'))
})

gulp.task("sass",['clean'], function () {
    return gulp.src('app/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(livereload());
       
})

gulp.task('autoprefixer',['concatcss'], () =>
    gulp.src('app/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
);

gulp.task('webserver',['concatcss'], function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            directoryListing: {
                enable:true
            },
            port:8080,
            // path:'./app'
            // fallback: 'index.html'
        }));
});

gulp.task('es6',()=>{
    gulp.src('app/js/*.js')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
})

gulp.task('copy',['cleanDist'],function() {
    return gulp.src(['./app/*.html','./app/image/*','./app/json/*'],{ base: 'app/'})
        .pipe(gulp.dest('./dist/'))
       
});

gulp.task('minifycss',()=>{
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(cssmin())   //执行压缩
        .pipe(gulp.dest('dist/css/'));   //输出文件夹
})

gulp.task('htmlreplace',['copy'],()=>{
    gulp.src('./app/*.html')
        .pipe(htmlreplace({
            'js': 'js/all.min.js',
            'css':'css/style.min.css'
        }))
        .pipe(gulp.dest('dist/'));
})


gulp.task('watch', function() { //这里的watch，是自定义的，携程live或者别的也行  
    livereload.listen();//这里需要注意！旧版使用var server = livereload();已经失效    
    gulp.watch('app/**/*.*', function(event) {  
        gulp.watch('app/sass/*.scss',['sass'])
      
       // gulp.watch('app/js/*.js',['es6'])
        livereload.changed(event.path);
        
        //console.log(event)
    }); 
    gulp.watch('static/**/*.*', function(event) {  
        livereload.changed(event.path);  
    }); 
   
    gulp.watch('app/js/*.js',['es6'])
    
});  



gulp.task('dev', ['clean','sass', 'concat','autoprefixer','es6','webserver','watch']);

gulp.task('build',['cleanDist','concat','copy','minifycss','htmlreplace','concatjs'])


