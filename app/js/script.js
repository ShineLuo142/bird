
$(function(){
    
    
    function HoverEvent(){
        this.init();
    }
    HoverEvent.prototype = {
        init:function(){
            this.topNavEvent();
            this.navShowEvent();
            this.goTop();
            this.mainImgHover();
        },
        
        topNavEvent:()=>{
            //top部分tab切换效果：
            $('.topnav li:even').hover(function(){
                $(this).find('.topshow').css({
                   'border-left':'1px solid #f8a89c',
                   'border-right':'1px solid #f8a89c',
                   'border-top':'1px solid #f8a89c',
                    'backgroundColor':'white', 
                })
                $(this).find('.tophide').show();
            },function(){
                $(this).find('.topshow').css({
                    'border':'1px solid transparent',
                    'backgroundColor':'#f8e3df',
                    'padding-bottom':'0',    
                })
                $(this).find('.tophide').hide();
            })
        },
        navShowEvent:function(){
            //top-nav导航show:
            $('.nav .navshow').hover(
                function(){
                    $('.nav .navhide').eq($(this).index()-1).show();
                },function(){
                    $('.nav .navhide').eq($(this).index()-1).hide();

                }
            )
            $('.nav .navhide').hover(
                function(){
                    $('.nav .navhide').eq($(this).index()-1).show();
                },function(){
                    $('.nav .navhide').eq($(this).index()-1).hide();

                }
            )
        },
        
        goTop:function(){ 
            //gotop:回到顶部效果：
            $(window).scroll(function(e){
                if ($(this).scrollTop()>700) {
                    $('.gotop').fadeIn();
                }else{
                    $('.gotop').fadeOut();
                }
            })
            $('.gotop').click(function(){
                $('html ,body').animate({scrollTop: 0}, 10);
            })
        },
        mainImgHover:function(){
            //index main图片划过opacity运动动画：
            $('.mainImgHover').hover(function(){
                $(this).find('a').find('img').animate({
                    'opacity': '.7'
                },50)
                $(this).find('a').find('img').animate({
                    'opacity': '1'
                },50)
            })
        },

    }
    new HoverEvent();
    //轮播：
    //index 1 banner:
    var swiper1 = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper2 = new Swiper('.swiper-container2', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    //mainproduct-banner：
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        effect: 'fade',
        loop: true,
        slidesPerView: 3,
        slidesPerColumn: 2,
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        effect: 'fade',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      });
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
  
    //懒加载：
    $("img.lazy").lazyload({effect: "fadeIn"});

})
