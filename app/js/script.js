
$(function(){
    
    
    function HoverEvent(){
        this.productTimer = null;
        this.productIndex = 0;
        this.init();
    }
    HoverEvent.prototype = {
        init:function(){
            this.topNavEvent();
            this.navShowEvent();
            this.goTop();
            this.mainImgHover();
            this.productHover();
            this.loginrememberclick();
            this.recommendLisHover();
            this.shapeHover();
            this.centerInputTxt();
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
        //注册登录记住密码处切换：
        loginrememberclick:function(){
            $('.loginradio').click(function(){
                $(this).toggleClass('selected');
            })
        },
        //婚戒推荐 & 全球美钻hover:
        recommendLisHover:function(){
            $('.recommendlis').hover(function(){
                $(this).animate({'margin-top':'-12'});
            },function(){
                $(this).animate({'margin-top':'0'});
            })
        },
        //各种形状hover：
        shapeHover:function(){
            $('.shape a').hover(function(){
                $(this).find('i').animate({'background-positionY':-49})           
            },function(){
                $(this).find('i').animate({'background-positionY':0})
            })           
        },
        //在线预约进店咨询框onfouse:
        centerInputTxt:function(){
            $('.centerinput .txt').focus=(function(){
                console.log('jjj')
                $(this).siblings().show();
            })
        },
        mainImgHover:function(){
            //index main图片划过opacity运动动画：
            $('.mainImgHover').hover(function(){
                $(this).animate({
                    'opacity': '.7'
                },50)
                $(this).animate({
                    'opacity': '1'
                },50)
            })
        },
        productHover:function(){
            let that = this;
            clearInterval(this.productTimer);
            this.productTimer = setInterval(()=>{
                if(this.productIndex > 4) {
                    this.productIndex = 0 ;
                }
                $(".gallery-thumbs li").eq(this.productIndex).addClass("active").siblings("li").removeClass("active");
                $(".product-swiper-container li").eq(this.productIndex).addClass("active").siblings("li").removeClass("active")
                this.productIndex += 1; 

            },2000)
            
            $(".gallery-thumbs li").hover(function(){
                clearInterval(that.productTimer);
                let index= $(this).index();
                $(this).addClass("active").siblings("li").removeClass("active");
                $(".product-swiper-container li").eq(index).addClass("active").siblings("li").removeClass("active");
                that.productIndex = index;
                that.productTimer = setInterval(()=>{
                    if(this.productIndex > 4) {
                        this.productIndex = 0 ;
                    }
                    $(".product-swiper-container li").eq(that.productIndex).addClass("active").siblings("li").removeClass("active")
                    that.productIndex += 1; 
                },2000)
            })
        }

    }
    new HoverEvent();

    function LoginTest(){
        this.init();
    }
    LoginTest.prototype ={
        init:function(){
            this.telTest();


        },
        telTest:function(){
            

        },

    }





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

    //婚戒推荐 & 全球美钻banner：
    var swiper3 = new Swiper('.swiper-container3', {
        slidesPerView: 4,
        spaceBetween: 45,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      //体验中心experence-center-banner:     
    var swiper4 = new Swiper('.swiper-container4', {
        spaceBetween: 30,
        effect: 'fade',
        loop:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
      });
      var swiper5 = new Swiper('.swiper-container5', {
        spaceBetween: 30,
        effect: 'fade',
        loop:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
      });
    //设置hover停止轮播：
    // $('.swiper-container4').mouseover(function(){
    //     swiper4.stopAutoplay();
    // })
    // $('.swiper-container4').mouseout(function(){
    //     swiper4.startAutoplay();
    // })
    
  




    //加载体验中心的文字：
var centerData=[{
        id:0,
        city:'上海',
        otitle:'上海体验中心',
        address:'黄浦区南京东路299号宏伊广场写字楼8楼',
        time:'周一至周四10:30~20:00 周五10:30~20:30 周六至周日10:00~20:30',
        tel:'咨询电话 021-33665178'
    },
    {
        id:1,
        city:'广州',
        otitle:'广州体验中心',
        address:'天河区天河路230号万菱汇国际中心35层',
        time:'周一至周五10:30~20:00 周六至周日10:00~20:30',
        tel:'咨询电话  020-85236561'
    },
    {
        id:2,
        city:'杭州',
        otitle:'杭州体验中心',
        address:'杭州市环城北路208号坤和中心1802室',
        time:'周一至周五10:30~20:00 周六至周日10:00~20:30',
        tel:'咨询电话  0571-89936665'
    },
    {
        id:3,
        city:'南京',
        otitle:'南京体验中心',
        address:'南京市秦淮区汉中路89号金鹰写字楼A座12层',
        time:'周一至周五 10:30~20:00 周六至周日 10:00~20:30',
        tel:'咨询电话  025-84732218',
    },
    {
        id:4,
        city:'成都',
        otitle:'成都体验中心',
        address:'锦江区总府路2号时代广场A座22楼',
        time:'周一至周五10:30~20:00 周六至周日10:00~20:30',
        tel:'咨询电话  028-86669117'
    },
    {
        id:5,
        city:'宁波',
        otitle:'宁波体验中心',
        address:'宁波市江北区大闸南路500号来福士广场办公楼1806室',
        time:'周一至周五10:30~20:00 周六至周日10:00~20:30',
        tel:'咨询电话  0574-83879552'
    },
    {
        id:6,
        city:'西安',
        otitle:'西安体验中心',
        address:'西安市南门外南关正街88号王府井百货写字楼A座503',
        time:'周一至周五 10:30~20:00 周六至周日 10:00~20:30',
        tel:'咨询电话  029-87651758'
    },
    {
        id:7,
        city:'重庆',
        otitle:'重庆体验中心',
        address:'重庆市渝中区解放碑大都会东方广场15层',
        time:'周一至周五 10:30~20:00 周六至周日 10:00~20:30',
        tel:'咨询电话  023-63707500'
    },
    {
        id:8,
        city:'天津',
        otitle:'天津体验中心',
        address:'天津市和平区南京路219号天津中心18层',
        time:'周一至周五 10:30~20:00 周六至周日 10:00~20:30',
        tel:'咨询电话  022-58369518',
    },
    {
        id:9,
        city:'郑州',
        otitle:'郑州体验中心',
        address:'郑州市二七区民主路10号华润大厦1904室',
        time:'周一至周五 10:30~20:00 周六至周日 10:00~20:30',
        tel:'咨询电话  0371-89910828',
    },
    {
        id:9,
        city:'合肥',
        otitle:'合肥体验中心',
        address:'安徽省合肥市芜湖路万达广场7号写字楼8F',
        time:'周一至周五 10:30~20:00 周六至周日 10:00~20:30',
        tel:'咨询电话&nbsp;&nbsp;0551-63666186',
    },
    {
        id:10,
        city:'北京新东安',
        otitle:'北京新东安体验中心',
        address:'王府井大街138号新东安T2办公楼7层',
        time:'周一至周五10:30~20:00 周六至周日10:00~20:30',
        tel:'咨询电话&nbsp;&nbsp;010-85186550',
    },
    {
        id:11,
        city:'武汉天地',
        otitle:'武汉天地体验中心',
        address:'武汉市京汉大道1398号壹方购物中心2号写字楼1106室',
        time:'周一至周五10:30~20:00 周六至周日10:00~20:30',
        tel:'咨询电话&nbsp;&nbsp;027-85267510',
    },
    {
        id:12,
        city:'盐城',
        otitle:'盐城体验中心',
        address:'武汉市京汉大道1398号壹方购物中心2号写字楼1106室',
        time:'周一至周五10:30~20:00 周六至周日10:00~20:30',
        tel:'咨询电话&nbsp;&nbsp;027-85267510',
    },
    {
        id:13,
        city:'济宁',
        otitle:'济宁体验中心',
        address:'山东省济宁市中区太白楼东路55号万达广场室内步行街1F-27A',
        time:'周一至周日 10:00-22:00',
        tel:'咨询电话&nbsp;&nbsp;0537-3162696',
    },
    {
        id:14,
        city:'临沂',
        otitle:'临沂体验中心',
        address:'山东省临沂市兰山区柳青街道济南路齐鲁园广场西区1F',
        time:'周一至周日10:00-21:00',
        tel:'咨询电话&nbsp;&nbsp;0539-8899521',
    },
    {
        id:15,
        city:'常州',
        otitle:'常州体验中心',
        address:'江苏省常州市天宁区兰陵北路999号九洲新世界1F-013',
        time:'周日至周四：10:00-22:00 周五至周六：10:00-22:30',
        tel:'咨询电话&nbsp;&nbsp;0519-83335520',
    },
    {
        id:16,
        city:'盐城金鹰体验中心',
        otitle:'盐城金鹰',
        address:'江苏省盐城市盐都区解放南路268号金鹰聚龙湖国际购物中心1F珠宝区',
        time:'周一至周五 9:30-21:30 周六至周日 9:15-22:00',
        tel:'咨询电话&nbsp;&nbsp;0515-88353883',
    },
    {
        id:17,
        city:'丽水',
        otitle:'丽水体验中心',
        address:'浙江省丽水市花园路16号万地广场1楼',
        time:'周一至周日 10:00-21:30',
        tel:'咨询电话&nbsp;&nbsp;0578-2138607',
    },
    {
        id:18,
        city:'宿迁',
        otitle:'宿迁体验中心',
        address:'江苏省宿迁市宿城区新青年路2号金鹰国际购物中心1F珠宝区',
        time:'周一至周日9:30-21:30',
        tel:'咨询电话&nbsp;&nbsp;0527-88855151',
    },
    {
        id:19,
        city:'苏州',
        otitle:'苏州体验中心',
        address:'苏州市高新区狮山路与塔园路交汇处龙湖时代天街购物中心B1层',
        time:'周一至周日10:00-22:00',
        tel:'咨询电话&nbsp;&nbsp;400-880-0051',
    },
    {
        id:20,
        city:'烟台',
        otitle:'烟台体验中心',
        address:'山东省烟台市芝罘区西关南街6号万达广场1F-1013',
        time:'周一至周日 10:30-21:30',
        tel:'咨询电话&nbsp;&nbsp;0535-7777520',
    },   
    {
        id:21,
        city:'南昌',
        otitle:'南昌体验中心',
        address:'江西省南昌市东湖区中山路318号天虹百货1F珠宝区',
        time:'周一至周日 9:30-22:00',
        tel:'咨询电话&nbsp;&nbsp;0791-86777063',
    },
    {
        id:22,
        city:'长沙万达',
        otitle:'长沙万达体验中心',
        address:'湖南省长沙市开福区湘江中路589号万达广场1F-17',
        time:'周一至周四：10:00-22:00 周五至周日：10:00-22:30',
        tel:'咨询电话&nbsp;&nbsp;0731-84895920',
    },
    {
        id:23,
        city:'义乌',
        otitle:'义乌体验中心',
        address:'浙江省义乌市稠江街道新科路9号万达广场1F',
        time:'周日至周四 10:00-22:00 周五至周六 10:00-22:30',
        tel:'咨询电话&nbsp;&nbsp;0579-85890179',
    },
    {
        id:24,
        city:'蚌埠',
        otitle:'蚌埠体验中心',
        address:'安徽省蚌埠市蚌山区东海大道4399号万达广场1F',
        time:'周一至周五 9:30-21:30 周六至周日 9:30-22:00',
        tel:'咨询电话&nbsp;&nbsp;0552-3028878',
    },
    {
        id:25,
        city:'衢州',
        otitle:'衢州体验中心',
        address:'浙江省衢州市柯城区县西街16号时代生活广场1楼',
        time:'',
        tel:'咨询电话&nbsp;&nbsp;0570-8036899',
    },
    {
        id:26,
        city:'海宁',
        otitle:'海宁体验中心',
        address:'浙江省海宁市工人路85号海宁人民广场爱琴海购物中心1F',
        time:'周一至周日：9:30--21:30',
        tel:'咨询电话&nbsp;&nbsp;0573-87237303',
    },
    {
        id:27,
        city:'邯郸',
        otitle:'邯郸体验中心',
        address:'河北省邯郸市丛台区人民路456号邯郸美乐城B1层',
        time:'周一-周日 10:00-21:00',
        tel:'咨询电话&nbsp;&nbsp;0310-5019035',
    },
    {
        id:28,
        city:'马鞍山',
        otitle:'马鞍山体验中心',
        address:'安徽省马鞍山市花山区金鹰百货购物中心一楼',
        time:'周一-周日 9:40-21:40',
        tel:'咨询电话&nbsp;&nbsp;0555-3115016',
    },
]
    $('#citys a').hover(function(){
        let index=$(this).index();  
        var str=`
            <h6>${centerData[index].otitle}</h6>
            <i></i>
            <p>${centerData[index].address}</p>
            <p>${centerData[index].time}</p>
            <p>${centerData[index].tel}</p>
            `;
        $('.centerdata').html(str);
    })







    //懒加载：
    $("img.lazy").lazyload({effect: "fadeIn"});





})

