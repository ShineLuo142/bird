$(function () {
    var app = {       
        api: 'http://127.0.0.1',
        init: function () {
            this.navSlideToggle();
            this.showHSearchEvevt();
            
        },
        navSlideToggle: function () {
            //商品列表导航slideToggle:
            $('.main-nav>ul>li>h5').click(function () {
                $(this).parent().children('ol').slideToggle();
            })
        },
        showHSearchEvevt: function(){
            //商品列表展开改机搜索:
            $('.show-h-search').click(function () {
                $(this).parent().children('ul').find('li').last().slideToggle();

            })
        },





    };
    app.init();
})