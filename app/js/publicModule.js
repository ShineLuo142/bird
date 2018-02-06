$(function(){
    function PublicModule(){
        this.init();
    }
    PublicModule.prototype = {
        init(){
            this.initHead();
            this.initFooter();
        },
        initHead(){
            let str = this.headHtmlString();
            this.headDom().html(str)
        },
        initFooter(){
            let str = this.footerHtmlString();
            this.footerDom().html(str)
        },
        headDom(){
            return $('.top-wrap')
        },
        footerDom(){
            return $('.footer-wrap')
        },
        headHtmlString(){
            let str = `<div class="top">
                <div class="welcome">
                    <h1>欢迎进入钻石小鸟官网</h1>
                    <span id="showlogin"  >登录</span>
                    <span id="showregister"  >注册</span>
                </div>
                <ul class="topnav">
                    <li>
                        <div class="topshow">
                            <img src="./image/header_box.png" class="top-bag"><a href="">购物车<span class="shop-count">0</span></a><i class="down"></i>
                        </div>
                        <div class="tophide topcar"></div>
                    </li>
                    <li><a href="">我的订单</a></li>
                    <li>
                        <div class="topshow">
                            <a href="">我的鸟巢</a><i class="down"></i>
                        </div>
                        <div class="tophide mycart">
                            <a href="#">订单查询</a>
                            <a href="#">售后服务</a>
                            <a href="#">积分换礼</a>
                        </div>
                    </li>
                    <li><a href="">钻石课堂</a></li>
                    <li>
                        <div class="topshow">
                            <a href="">手机官网</a>
                        </div>
                        <div class="tophide phoneweb">
                            <img src="./image/code_wechat.jpg" alt="">
                        </div>
                    </li>
                </ul>
            </div>`

            return str
        },
        footerHtmlString(){
            let str = `
            <div class="footer">
				<div class="footertop">
					<a href="#"></a>
					<a href="#"></a>
					<a href="#"></a>
					<a href="#"></a>
					<a href="#"></a>
					<a href="#"></a>
				</div>
				<div class="footermain clearfix">
					<div><a href="#"></a></div>					
					<ul>
						<li><a href="#">关于我们</a></li>
						<li><a href="#">品牌简介</a></li>
						<li><a href="#">市场合作</a></li>
						<li><a href="#">诚聘贤才</a></li>
						<li><a href="#">联系我们</a></li>
						<li><a href="#">商务加盟</a></li>
					</ul>
					<ul>
						<li><a href="#">购物指南</a></li>
						<li><a href="#">购物流程</a></li>
						<li><a href="#">订单处理时间</a></li>
						<li><a href="#">订单查询</a></li>
						<li><a href="#">特色商品说明</a></li>
					</ul>
					<ul>
						<li><a href="#">支付方式</a></li>
						<li><a href="#">在线支付</a></li>
						<li><a href="#">货到付款</a></li>
						<li><a href="#">银行汇款</a></li>
						<li><a href="#">海外汇款</a></li>
					</ul>
					<ul>
						<li><a href="#">配送方式</a></li>
						<li><a href="#">体验中心自提</a></li>
						<li><a href="#">全国免费配送</a></li>
						<li><a href="#">海外配送</a></li>
						<li><a href="#">货品包装</a></li>
					</ul>
					<ul>
						<li><a href="#">售后服务</a></li>
						<li><a href="#">售后政策</a></li>
						<li><a href="#">15天退换</a></li>
						<li><a href="#">以小换大</a></li>
						<li><a href="#">优惠换款</a></li>		
					</ul>
					<img src="image/code.jpg" alt="">
				</div>
				<div class="footcall">
					<a href="#"></a>

				</div>
				<div class="coopright">
					<a href="#">网站地图</a><span>|</span>
					<a href="#">友情链接</a><span>|</span>
					<a href="#">在线投诉</a><span>|</span>
					<a href="#">沪ICP备08011593号</a><span>|</span>
					<span>Copyright © 2002-2018 www.zbird.com  钻石小鸟  All Rights Reserved.</span>
					<p>上海铂利德钻石有限公司     021-26011188</p>
					<p>
						<a href="#">新版钻石课堂</a><span>|</span>
						<a href="#">名鞋库</a><span>|</span>
						<a href="#">加盟</a><span>|</span>
						<a href="#">童装加盟</a><span>|</span>
						<a href="#">中国婚博会</a><span>|</span>
						<a href="#">化妆品招商网</a><span>|</span>
						<a href="#">妆点时尚</a><span>|</span>
						<a href="#">中交网</a><span>|</span>
						<a href="#">环球贸易网</a><span>|</span>
						<a href="#">中国产品网</a><span>|</span>
						<a href="#">海景房</a><span>|</span>
						<a href="#">装修网</a><span>|</span>
						<a href="#">钻石小鸟</a><span>|</span>
						<a href="#">网络114</a><span>|</span>
						<a href="#"></a><span>|</span> 
					</p>
				</div>
				<div class="footimg">
					<a href="#"><img src="image/foot1.gif" alt=""></a>
					<a href="#"><img src="image/foot2.jpg" alt=""></a>
					<a href="#"><img src="image/foot3.jpg" alt=""></a>
					<a href="#"><img src="image/foot4.jpg" alt=""></a>
					<a href="#"><img src="image/foot5.jpg" alt=""></a>
				</div>
            </div>
            `
            return str
        }
    }
    new PublicModule()

})