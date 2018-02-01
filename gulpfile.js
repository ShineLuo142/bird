	
	
	//多个css操作：
	var gulp = require('gulp');
	gulp.task('watchFile', ['MiniCss', 'MiniJs'], function() {
	    gulp.watch('js/*.js', ['MiniJs']);
	    gulp.watch('css/*.css', ['MiniCss'])	
	});
	
	
  var concat = require('gulp-concat');  //合并
  var autoprefixer = require('gulp-autoprefixer'); //处理前缀
  var rename = require("gulp-rename");	   //重命名
  var cleanCSS = require('gulp-clean-css');  //压缩css

  var connect = require('gulp-connect');

	gulp.task('csstask', function () {
	    gulp.src('css/*.css')
	        .pipe(autoprefixer({
	            browsers: ['last 2 versions', 'Android >= 4.0',"> 5%"],
	            cascade: true, //是否美化属性值 默认：true 像这样：
	            //-webkit-transform: rotate(45deg);
	            //        transform: rotate(45deg);
	            remove:true //是否去掉不必要的前缀 默认：true 
	        }))
	        .pipe(cleanCSS())
	        .pipe(concat('app.min.css'))
	//	        .pipe( rename('app.min.css'))
	        .pipe(gulp.dest('dist/css')) 
	        .pipe(connect.reload());  /*css改变后压缩完成后 重新启动web服务*/
	});  	
	 // 用来设置开启服务器环境的任务
	gulp.task('server', function() {
	    connect.server({	    	
	        port: 8000, // 更改端口号的  直接放上你要的端口号	       
	        livereload: true
	    });
	});


//监听文件改变的任务  只要文件改变就会重新调用压缩css的任务
gulp.task('watchFile', ['csstask','server'], function() {

	//检测到css文件的变化  执行压缩的任务
    gulp.watch('css/*.css', ['csstask']); 
    
    //gulp.watch('js/*.js', ['jstask']); 

});
	
	
	
	
	
	
	
	
