$(_=>{
    let obj = {
        init(){
            this. productBrandCon();
           // this.productNavScroll();
            this.bigger();
            this.shoppingcarfly();
        },        
        productBrandCon(){
            $('.product-brand-top span').hover(function(){
                $('.product-brand-con').eq($(this).index()).show().siblings().hide();
                $(this).addClass('active').siblings().removeClass('active')
            })

        },
        productNavScroll(){
            $(window).scroll(function(e){
                if ($(this).scrollTop()>800) {                    
                    $('.productnav ul').css({
                        'position':'fixed',
                        'top':'0',
                        'left':'0',
                        'border-bottom':'1px solid #ccc',
                        'width':'100%'
                         
                    })
                }else{
                    $('.productnav ul').css({
                        position:'static',
                        'transform':'none',
                        'border-bottom':'0',
                    })
                }
            })
        },
        shoppingcarfly(){
            var offset = $("#car-end").offset();
            let temp = location.href.split("?")[1],id;
           
            if(temp){
                id = temp.split("=")[1]
            }
            let itemProduct = JSON.parse(localStorage.productList)[id]
            $(".car-addcar").unbind('click').click(function(event){
                if(localStorage.isLogin == 0){
                    $("#showlogin").click();
                    return
                }
                var addcar = $(this);
                var img = $("#imgbox").find('img').attr('src');
                var flyer = $('<img class="u-flyer" src="'+img+'">');
                flyer.fly({
                    start: {
                        left: $("#preview").offset().left,
                        top: $("#preview").offset().top
                    },
                    end: {
                        left: offset.left+10,
                        top: offset.top+10,
                        width: 0,
                        height: 0
                    },
                    onEnd: function(){
                        let tempaArr;
                        if(!localStorage.shoppingData){
                            localStorage.shoppingData = JSON.stringify([itemProduct]);
                            tempaArr =[itemProduct]
                        }else{
                            tempaArr = JSON.parse(localStorage.shoppingData)
                            tempaArr.push(itemProduct)
                            localStorage.shoppingData = JSON.stringify(tempaArr)
                        }
                        
                        localStorage.shoppingCarNum = parseInt(localStorage.shoppingCarNum) + 1;
                        $(".shop-count").text(tempaArr.length)
                        this.destory();
                    }
                });
            });
        },
        bigger(){
           
            //图片放大镜效果
            $(function(){
                if($(".jqzoom").length >0){
                    $(".jqzoom").jqueryzoom({xzoom:380,yzoom:410});
                }
                
            });
            
            //图片预览小图移动效果,页面加载时触发
            $(function(){
                var tempLength = 0; //临时变量,当前移动的长度
                var viewNum = 5; //设置每次显示图片的个数量
                var moveNum = 2; //每次移动的数量
                var moveTime = 300; //移动速度,毫秒
                var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
                var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
                var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
                var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
                  
                //下一张
                $(".spec-scroll .next").bind("click",function(){
                    if(tempLength < countLength){
                        if((countLength - tempLength) > moveLength){
                            scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
                            tempLength += moveLength;
                        }else{
                            scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
                            tempLength += (countLength - tempLength);
                        }
                    }
                });
                //上一张
                $(".spec-scroll .prev").bind("click",function(){
                    if(tempLength > 0){
                        if(tempLength > moveLength){
                            scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
                            tempLength -= moveLength;
                        }else{
                            scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
                            tempLength = 0;
                        }
                    }
                });
            });
        }

    }
    obj.init();
  
})

window.preview = function(img){
    $("#preview .jqzoom img").attr("src",$(img).attr("src"));
    $("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}