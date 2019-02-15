/*创建head*/
function Head(){
	this.head = $("#HEAD");
	this.foot = $("#FOOT");
	this.fixnav = $("#FIXNAV");
}
$.extend(Head.prototype,{
	init:function(){
		this.createDom();
	},
	createDom:function(){
		this.element = new CreHeader(this.head);
		this.element = new CreFooter(this.foot);
		this.element = new Crefixnav(this.fixnav);
	}
})
new Head().init();

/*通过localStorage向页面添加商品信息*/
function Proinfor(){
	this.pro_look =$("#pro_look");
	this.pro_infor =$("#pro_infor");
	this.section2 =$("#section2");
	this.pro_intro_imgs = $("#pro_intro_imgs");
	this.pro_title = $(".protit");
}
$.extend(Proinfor.prototype,{
	init:function(){
		this.getdata();
	},
	getdata:function(){
		$.ajax({
			type:"post",
			url:"http://localhost/work/yigu/src/php/select.php",
			data:{},
			dataType:"json",
			success:$.proxy(this.add,this)
		})
	},
	add:function(data){
		if(localStorage.getItem("buy_data")){
		    var cookie = JSON.parse(localStorage.getItem("buy_data"));
		    var m = "";
		    var t = "";
		    var sig = "";
		    var sigbox = "";
		    var imgarr=[];
		    var sigarr=[];
		
		    for(var k in cookie){
		        for(var i = 0;i<data.length;i++){
		            if(k == data[i].did){
						this.pro_title.html(data[i].title);
						
		                if(data[i].simg!=""){	
		            	sigarr=JSON.parse(data[i].simg);
		            	
			                /*放大镜*/
			                var n = 0;
			                while(n<sigarr.length){
			                	sig +=`
			                	<img src="${sigarr[n]}" class="small"  data-url="${sigarr[n]}">
			                	`;
			                	n++;
			                }
			                sigbox = $("<div class = 'smails'></div>").append(sig); 
			            }
		                 m =`
					    <div id="box">
							<img src="${data[i].img}" class="middle" width="400" height="400">
							<div id="filter"></div>
						</div>
						<div id="max">
							<img src="${data[i].img}" id="maxImg" style="width:800px;height:800px;">
						</div>
		                 `;
	
		                 /*商品价格*/
		                 t = `
							<h3>${data[i].title}</h3>
							<p>${data[i].p}</p>
							<div class="prices">
								<p>市场价：￥<span>${data[i].mprice}</span></p>
								<p>商城价：<span>￥<em class="price">${data[i].price}</em></span></p>
							</div>
							<p><span>月销量</span><span class="tit">${data[i].sale}</span></p>
							<div class="serve">
								<p><span class="sign">配送</span>16:00 前完成订单,预计明日(05-14)送达,生鲜商品仅限深圳!</p>
								<p><span class="sign">运费</span>深圳市内每单物流费8元起，满199元免物流!</p>
								<p><span class="sign">提示</span>产品图片及描述内容仅做参考,请您以收到的商品实物为准！谢谢</p>
							</div>
							<div class="tomap">
								<p><span>配送至：</span><input type="text" value="深圳市内" /></p>
								<p><span>规格：</span><span class="kg">${data[i].guige}</span></p>
								<div class="countnum"><span>数量：</span><span class="num">1</span><div class="btn"><span class="addbtn">+</span><span class="decbtn">-</span></div>
								<a href="##"><i class="iconfont icon-share_light"></i><span>分享</span></a>
								<a href="##"><i class="iconfont icon-favor_light"></i><span>收藏</span></a>
								</div>
							</div>
							<div class="abtn">
								<a href="##" class="buy"  data-id="${data[i].did}">立即购买</a>
								<a href="##" class="addshop"  data-id="${data[i].did}"><i class="iconfont icon-cart_light"></i>加入购物车</a>
							</div>
		                 `;
		                
		                 if(data[i].intro!=""){  	
		                	 imgarr = JSON.parse(data[i].intro);
		                 }
		                 this.pro_look.html(m).append(sigbox);
		                 this.pro_infor.html(t);
		            }
		                
		        }
		    }
		}
		if(imgarr.length>0){
			 for(var i in imgarr){
		         var img = $("<img/>");
		         img.attr("src",imgarr[i]);
		         this.pro_intro_imgs.append(img);
			}
		}
		   
	}
})

new Proinfor().init();


 window.onload = function(){

	/*小轮播*/
	new Swiper ('.swiper-container', {
		direction : 'vertical',
        loop: true,
        autoplay: {
         	autoplay:true,
		    delay: 5000,//1秒切换一次
		  },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect:'slide'
    })
	 	/*放大镜*/
	function Amplification(){
		this.filter = $("#filter");
		this.box = $("#box");
		this.max = $("#max");
		this.smalls = $(".small");
		this.maxImg = $("#max img");
		this.boxImg = $("#box img");	
	}
	$.extend(Amplification.prototype,{
		init:function(){
			this.over();
		},
		over:function(){
			var _this = this;
			this.box.mouseover(function(){
				_this.filter.css("display","block");
				_this.max.css("display","block");
			});
			this.box.mouseout(function(){
				_this.filter.css("display","none");
				_this.max.css("display","none");
			});
			this.box.mousemove(function(e){
				
				var l = e.pageX-_this.filter.width()/2-_this.box.offset().left;
				var t = e.pageY-_this.filter.height()/2-_this.box.offset().top;
				
				var maxl = _this.box.width() - _this.filter.width();
				var maxt = _this.box.height() - _this.filter.height();

				l = l > maxl ? maxl : (l < 0 ? 0 : l);
				t = t > maxt ? maxt : (t < 0 ? 0 : t);

				_this.filter.css({
					left:l,
					top:t
				})

				var bigl =-l/maxl*(_this.maxImg.width() - _this.max.width());
				var bigt =-t/maxt*(_this.maxImg.height() - _this.max.height());

				_this.maxImg.css({
					left:bigl,
					top:bigt
				})

			});

			this.smalls.mouseover(function() {
				var src = $(this).attr("data-url");
				_this.maxImg.attr("src",src);
				_this.boxImg.attr("src",src);
			})
			
		}
	})

	new Amplification().init() 	
	/*购物车*/
	function numupdate(){
		this.pri = $(".price");
		this.num = $(".num");
    	this.add = $(".addbtn");
    	this.dre = $(".decbtn");
    	// this.sum = $(".sum");
	}
	$.extend(numupdate.prototype,{
		init:function(){
		    this.add.click($.proxy(this.addup,this));
		    this.dre.click($.proxy(this.dreup,this));
		},
		addup:function(){
		  	var n = Number(this.num.html());
		  	var price = Number(this.pri.html());
            n++;
            console.log(this.num.html())
            this.num.html(n);
		},
		dreup:function(){
		  	var n = Number(this.num.html());
             if(n<1){
                n=1;
             }
            n--;
            this.num.html(n);
		}
	})
	new numupdate().init();

	/*点击加入购物车或者立即购买跳转到结算页面*/
	function tolist(){
		this.abtn = $(".abtn");
		this.num = $(".num");
	}
	$.extend(tolist.prototype,{
		init:function(){
			this.abtn.click($.proxy(this.btnclick,this));
		},
		btnclick:function(e){
		var buy_data = {};
			var target = e.target || e.srcElement;
			        console.log(target);
	        if(target.tagName == "A" && target.className == "buy"){
	            var id = $(target).attr("data-id");
	            console.log(this.num);
	            var n = Number(this.num.html());
	            buy_data[id] = n;
	            var b_data = JSON.stringify(buy_data);
	            localStorage.setItem("buy_list",b_data);
	            location.href = "list.html";
	        }
	        if(target.tagName == "A" && target.className == "addshop"){
	            var id = $(target).attr("data-id");
	            var n = buy_data[id];
	             if(!n){
	                 n = Number(this.num.html());
	                 buy_data[id] = n;
	             }else{
	                 n++;
	                 buy_data[id] = n;
	             }
	            var b_data = JSON.stringify(buy_data);
	            localStorage.setItem("buy_shop",b_data);
	          //  location.href = "list.html";
	        }
		}
	})
	new tolist().init();
 }
