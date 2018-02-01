$(function(){
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
})
