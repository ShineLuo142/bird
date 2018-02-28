$(function(){
    function PublicModule(){
        this.init();
    }
    PublicModule.prototype = {
        init(){
            this.initHead();
			this.initFooter();
			this.initAside();
			this.initLoginDarg();
			var oBox = document.getElementById("loginMain");
            var oNav = document.getElementById("loginMainHeader");
            var oClose = document.getElementById("loginMainClose");
            this.loginDragEvent(oBox,oNav,oClose);
            
            this.loginDragEvent($("#registerMain")[0],$("#registerMainHeader")[0],$("#registerMainClose")[0])
			this.checkLoginEvent();
			this.loginEvent()
			this.checkRegisterEvent();
			if(!localStorage.shoppingData){
				localStorage.shoppingData = '';
			}
			if(!localStorage.shoppingCarNum){
				localStorage.shoppingCarNum = 0;
			}
			
			if(!localStorage.isLogin){
				localStorage.isLogin = 0
			}
			if(localStorage.userName){
				$("#userName").html(localStorage.userName);
			}
			
        },
        initHead(){
            let str = this.headHtmlString();
            this.headDom().html(str)
        },
        initFooter(){
            let str = this.footerHtmlString();
            this.footerDom().html(str)
		},
		initAside(){
			let str = this.asideHtmlString();
			this.asideDom().html(str)
		},
        headDom(){
            return $('.top-wrap')
        },
        footerDom(){
            return $('.footer-wrap')
		},
		asideDom(){
			return $(".aside-box")
		},
		initLoginDarg(){
			if($("body").find('.login-main')){
				$(".login-main").remove();
				$("body").append(this.loginStringHtml())
			}else{
				$("body").append(this.loginStringHtml())
			}
		},
        headHtmlString(){
			if(!localStorage.shoppingCarNum){
				localStorage.shoppingCarNum = 0
			}
            let str = `<div class="top">
                <div class="welcome">
                    <h1>欢迎<a id="userName" href="index.html"></a>进入钻石小鸟官网</h1>
                    <span id="showlogin"  >登录</span>
                    <span id="showregister"  >注册</span>
                </div>
                <ul class="topnav">
                    <li>
                        <div class="topshow">
                            <img src="./image/header_box.png" class="top-bag"><a href="shoppingcar.html">购物车<span class="shop-count">${localStorage.shoppingCarNum}</span></a><i class="down"></i>
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
						<a href="#">网络114</a><span></span>
						
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
		},
		asideHtmlString(){
			let str = `
			<div class="aside">
				<a href="#">&nbsp</a>
				<a href="shoppingcar.html"  id="car-end" class="car-end shop-count">${localStorage.shoppingCarNum}</a>
				<a href="#"></a>
				<a href="#"></a>
				<a href="#"><div></div></a>
			</div>
			<div class="gotop"></div>
			`
			return str
		},
		loginShowEvent:function(){
            $('#showlogin').click(function(){
                $('.login-main').show();
                $('.loginbox').show().siblings().hide();            
            })
        },
        registerShowEvent:function(){
            $('#showregister').click(function(){
                $('.login-main').show();
                $('.registerbox').show().siblings().hide();
           })
		},
		loginStringHtml(){
			let str = `
			<div class="login-main">
			
			<div class="loginbox drag" id="loginMain">
				<div class="loginheader clearfix handler" id="loginMainHeader">
					<h3>会员登录</h3>
					<span class="closeloginbg" id="loginMainClose">关闭</span>
				</div>
				<div class="loginform">
					<div class="item-input">
						<input type="text" name="" placeholder="手机号" class="textype usertel">
						<span class="warning usertelWarning"></span>
					</div>
					<div class="item-input">
						<input type="password" name="" placeholder="密码" id="loginPassword" class="textype userpassword">
						<span class="warning userpasswordWarning"></span>
					</div>
						<div class="inputremenber clearfix">
						<span class="loginradio"></span>
						<span>自动登录</span>
						<a href="#">忘记密码</a>
					</div>
					<input type="submit" name="" id="sub" value="登录">
			
					<div class="loginfooter">
						<div class="loginfooter-line">
							<i class="line"></i>
							<span>合作网站账号登录</span>
							<i class="line"></i>
						</div>
						<div class="loginfooter-img">
							<a href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
						</div>
					</div>
				</div>
			
			
			</div>
			<div class="registerbox drag" id="registerMain">
				<div class="registerheader handler clearfix" id="registerMainHeader">
					<h3>欢迎注册</h3>
					<div class="h3right">
						<span class="closeloginbg" id="registerMainClose">关闭</span>
					</div>
				</div>
				<div class="registerform">
				<div class="item-input">
					<input type="text" name="" placeholder="请输入手机号" class="textype userRegisterTel">
					<span class="warning userRegisterTelWarning"></span>
				</div>
					<div class="buttomdiv">
						<input type="text" name="" placeholder="6位验证码" class="identifying-code">
						<input type="button" name="" value="免费获取手机验证码" class="identifyingbutton">
					</div>
					<span></span>
					<div class="item-input">
					<input type="password" name="" placeholder="6-20位大小写字母，数字及'-'、'_'组合" class="textype userpassword1">
					<span class="warning userpassword1Warning"></span>
					</div>
					<div class="item-input">
						<input type="password" name="" placeholder="请再次输入密码" class="textype userpassword2">
						<span class="warning userpassword2Warning"></span>
					</div>
					<div class="inputremenber clearfix">
						<span class="loginradio"></span>
						<span>已阅读并同意
							<a href="#">《钻石小鸟用户服务协议》</a>
						</span>
					</div>
					<input type="submit" name="" id="sub" value="注册">
				</div>
			
			
			</div>
		</div>
			`
		return str;	
		},
		loginShowEvent:function(){
            $('#showlogin').click(function(){
                $('.login-main').show();
                $('.loginbox').show().siblings().hide();            
            })
        },
        registerShowEvent:function(){
            $('#showregister').click(function(){
                $('.login-main').show();
                $('.registerbox').show().siblings().hide();
           })
        },
        closeLoginbgEvent:function(){
            $('.closeloginbg').click(function(){
                $('.loginbg').hide();
            })
		},
		loginDragEvent(oBox,oNav,oClose){ 
            // var oBox = document.getElementById("loginMain");
            // var oNav = document.getElementById("loginMainHeader");
            // var oClose = document.getElementById("loginMainClose");
            console.log(oBox,oNav)
            //onmousedown
            oNav.onmousedown = function(e){
                e = e || event;
                if (e.preventDefault) {
                    e.preventDefault(); //阻止浏览器默认行为，非IE
                }else {
                    e.returnValue = false; //IE
                }
                
                var disX = e.pageX - oBox.offsetLeft;
                var disY = e.pageY - oBox.offsetTop;
                
                //onmousemove
                document.onmousemove = function(e){
                    oBox.style.margin='0'
                    e = e || event;
                    oBox.style.left = e.pageX - disX + "px";
                    oBox.style.top = e.pageY - disY + "px";
                    
                }
                //onmouseup
                document.onmouseup = function(){
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
                
                
            }
            oClose.onmousedown = function(e){
                e = e || event;
                if (e.stopPropagation) {
                    e.stopPropagation(); //非IE,阻止冒泡
                }else {
                    e.cancelBubble = true; //IE
                }
            }
            //关闭
            oClose.onclick = function(){
                oBox.style.display = "none";					
            }
		},
		
		checkLoginEvent(){
			$(".usertel").change(function(){
				if(!/^[0-9]{11}$/.test($(this).val())){
					
					$(".usertelWarning").html("请输入正确的手机号码")
				}else{
					
					$(".usertelWarning").html("")
				}
			})
		
		},
		checkRegisterEvent(){
			$(".userRegisterTel").change(function(){
				if(!/^[0-9]{11}$/.test($(this).val())){
					
					$(".userRegisterTelWarning").html("请输入正确的手机号码")
				}else{
					
					$(".userRegisterTelWarning").html("")
				}
			})
			$(".userpassword1").change(function(){
				if(!/^\w{6,20}$/.test($(this).val())){
					$(".userpassword1Warning").html("请输入6-20位大小写字母，数字及'-'、'_'组合")
				}else{
					$(".userpassword1Warning").html("")
				}
			})
			$(".userpassword2").change(function(){
				if($(".userpassword1").val() != $(this).val()){
					$(".userpassword2Warning").html("请输入相同的密码")
				}else{
					$(".userpassword2Warning").html("")
				}
			})
		
		},
		loginEvent(){
			let temp;
			$("#sub").click(_=>{
				let userName = ''
				if(!/^[0-9]{11}$/.test($(".usertel").val())){
					temp = false
					$(".usertelWarning").html("请输入正确的手机号码")
				}else{
					userName = $(".usertel").val();
					temp = true
					$(".usertelWarning").html("")
				}
				if(temp && $("#loginPassword").val()){
					$.get('./json/user.json',function(data){
						let a = data.filter(function(item,index){
							return item.phone == userName && $("#loginPassword").val() == item.password
						})
						if(a.length == 1){
							$("#loginMainClose").click();
							localStorage.userName = userName
							$("#userName").html(localStorage.userName);
							localStorage.isLogin = 1
						}else{
							localStorage.isLogin = 0
							alert("账号不存在或密码错误")
						}
					})
				}
			})
		}
    }
    new PublicModule()

})