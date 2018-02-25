$(function () {
    var app = {       
        api: 'http://127.0.0.1',
        init: function () {
            this.navSlideToggle();
            this.showHSearchEvevt();
            this.getProductList()
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
        getProductList(){
            $.get("./json/productList.json", function (result) {
                localStorage.productList = JSON.stringify(result)
                let str = '';
                for(let i = 0; i < result.length ; i++){
                    let item = result[i];
                    str += `<a href="product.html?id=${item.id}">
                    <img src="${item.img}" alt="">
                    <p><i>${item.name}</i></p>
                    <strong>￥${item.price}</strong>
                    <p><span>售出<i>${item.count}</i></span><span>评论<i>${item.comment}</i></span></p>
                    </a>`
                }
                $(".productbox").html(str)
            })
        }




    };
    app.init();
})