
//top部分tab切换效果：

$(function(){
    
    
    function HoverEvent(){
        this.init();
    }
    HoverEvent.prototype = {
        init:function(){
            this.topNavEvent();
            this.navShowEvent();
            this.goTop();
        },
        topNavEvent:()=>{
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
            //nav:
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
        }

    }
    new HoverEvent();
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
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

})
