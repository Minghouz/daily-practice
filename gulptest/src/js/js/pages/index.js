/*向页面添加数据*/
function addmodel(){
	this.main = $(".content_box");
	this.sec1 = $(".sec1");
	this.sec2 = $(".sec2");
	this.sec3 = $(".sec3");
	this.sec4 = $(".sec4");
	this.sec5 = $(".sec5");
	this.sec6 = $(".sec6");
	this.sec7 = $(".sec7");
	this.sec8 = $(".sec8");
}
$.extend(addmodel.prototype,{
	init:function(){
		this.addata();
	},
	addata:function(){
		$.ajax({
			type:"post",
			url:"http://localhost/work/yigu/src/php/select.php",
			data:{},
			dataType:"json",
			success:$.proxy(this.datas,this)
		})
	},
	datas:function(data){		
		// section

	var sec_t = '',sec_b='',sec3='',sec4='',sec5='',sec6='',sec7='',sec8='';

		sec_t =`
			<a href="##" class="img_t"   data-id="${data[0].did}" ><img src="${data[0].img}?${data[0].did}" class="img" alt=""></a>
			<a href="##" class="shmove"  data-id="${data[1].did}">
				<img src="${data[1].img}?${data[1].did}" class="img" alt="">
				<div class="pro_text">
					<h3 class="img">${data[1].title}</h3>
					<p><span class="fl">￥${data[1].mprice}</span><span class="fr">￥${data[1].price}</span></p>
				</div>
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			<a href="##" class="shmove"  data-id="${data[2].did}">
				<img src="${data[2].img}?${data[2].did}" class="img" alt="">
				<div class="pro_text">
					<h3 class="img">${data[2].title}</h3>
					<p><span class="fl">￥${data[2].mprice}</span><span class="fr">￥${data[2].price}</span></p>
				</div>
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
		`;

	this.sec1.html(sec_t);

		sec_b =`
			<a href="##" class="shmove"  data-id="${data[3].did}">
				<img src="${data[3].img}?${data[3].did}" class="img" alt="">
				<div class="pro_text">
					<h3 class="img">${data[3].title}</h3>
					<p><span class="fl">￥${data[3].mprice}</span><span class="fr">￥${data[3].price}</span></p>
				</div>
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			<a href="##" class="shmove"  data-id="${data[4].did}">
				<img src="${data[4].img}?${data[4].did}" class="img" alt="">
				<div class="pro_text">
					<h3 class="img">${data[4].title}</h3>
					<p><span class="fl">￥${data[4].mprice}</span><span class="fr">￥${data[4].price}</span></p>
				</div>
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			<a href="##" class="img_t"   data-id="${data[5].did}" ><img src="${data[5].img}?${data[5].did}" class="img" alt=""></a>
		`;
	
	this.sec2.html(sec_b);

		for(var i = 6;i<9;i++){
			sec3+=`
			<a href="##" class="shmove iw1"  data-id="${data[i].did}">
				<img src="${data[i].img}?${data[i].did}" class="img" alt="">
				<div class="pro_text">
					<h3 class="img">${data[i].title}</h3>
					<p><span class="fl">￥${data[i].mprice}</span><span class="fr">￥${data[i].price}</span></p>
				</div>
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			`;
		}
	this.sec3.html(sec3);

		for(var i = 9;i<12;i++){
			sec4+=`
			<a href="##" class="shmove iw1"  data-id="${data[i].did}">
				<img src="${data[i].img}?${data[i].did}" class="img" alt="">
				<div class="pro_text">
					<h3 class="img">${data[i].title}</h3>
					<p><span class="fl">￥${data[i].mprice}</span><span class="fr">￥${data[i].price}</span></p>
				</div>
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			`;
		}
	this.sec4.html(sec4);

		for(var i = 12;i<15;i++){
			sec5+=`
			<a href="##" class="shmove iw2 ih2 prelative"   data-id="${data[i].did}">
				<img src="${data[i].img}?${data[i].did}" class="img" alt="">
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			`;
		}
	this.sec5.html(sec5);

		for(var i = 15;i<18;i++){
			sec6+=`
			<a href="##" class="shmove iw1"  data-id="${data[i].did}">
				<img src="${data[i].img}?${data[i].did}" class="img" alt="">
				<div class="pro_text">
					<h3 class="img">${data[i].title}</h3>
					<p><span class="fl">￥${data[i].mprice}</span><span class="fr">￥${data[i].price}</span></p>
				</div>
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			`;
		}
	this.sec6.html(sec6);
	
		for(var i = 18;i<21;i++){
			sec7+=`
			<a href="##" class="shmove iw1"  data-id="${data[i].did}">
				<img src="${data[i].img}?${data[i].did}" class="img" alt="">
				<div class="pro_text">
					<h3 class="img">${data[i].title}</h3>
					<p><span class="fl">￥${data[i].mprice}</span><span class="fr">￥${data[i].price}</span></p>
				</div>
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			`;
		}
	this.sec7.html(sec7);

		for(var i = 21;i<24;i++){
			sec8+=`
			<a href="##" class="shmove iw2 ih2 prelative"   data-id="${data[i].did}" >
				<img src="${data[i].img}?${data[i].did}" class="img" alt="">
				<span id = "addshop"><em class="img">加入购物车</em></span>
			</a>
			`;
		}
	this.sec8.html(sec8);

		var buy_data = {};
		var pro_data = {};
		this.main.click(function(e){
			var e = e ||event;
			var target = e.target ||e.srcElement;
			 /*点击图片跳转到详情页面*/
			if(target.tagName =="IMG" && target.className == "img"){
			    let str = target.src;
			    let id = str.split("?")[1].split("=")[1];
			   for(let i = 0;i<data.length;i++){
			       if(id == data[i].id){
			           var text = $(target).parent().attr("data-id");
			           var m = pro_data[text];
			           if(!m){
			               m = 1;
			               pro_data[text]=m;
			           }
			          var product = JSON.stringify(pro_data);
			           localStorage.setItem("buy_data",product);
			           location.href = "html/details.html";
			           break;
			       }
			   }
			}
			console.log(target);
			if(target.tagName == "SPAN" && target.id == "addshop" || target.tagName == "EM"){

	            var id = $(target).parent().parent().attr("data-id");
	            console.log(id);
	            var n = buy_data[id];
	             if(!n){
	                 n = 1;
	                 buy_data[id] = n;
	             }else{
	                 n++;
	                 buy_data[id] = n;
	             }
	            var b_data = JSON.stringify(buy_data);
	            localStorage.setItem("buy_list",b_data);
	          //  location.href = "html/list.html";
	       	}
		});

	}
})

new addmodel().init();



/*轮播图*/
function swiper(){
	this.abtn = $(".swiperbtn");
	this.swiper = $(".swiper-container");
}
$.extend(swiper.prototype,{
	init:function(){
		this.enter();
	},
	enter:function(){
		this.swiper.on("mouseenter",$.proxy(this.abtnshow,this));
		this.swiper.on("mouseleave",$.proxy(this.abtnhide,this));
	},
	abtnshow:function(){
		this.abtn.css("display","block");
	},
	abtnhide:function(){
		this.abtn.css("display","none");
	}
})
new swiper().init();
window.onload = function(){
	/*鼠标移入效果*/
	function Mouseover(){
		this.lis = $(".img");
	}
	$.extend(Mouseover.prototype,{
		init:function(){
			this.lis.mouseover($.proxy(this.over));
			this.lis.mouseover($.proxy(this.out));
		},
		over:function(){
			$(this).animate({
				left:10
			},300)
		},
		out:function(){
			$(this).animate({
				left:0
			},300)
		}
	})
	new Mouseover().init();

	/*选项卡*/
	function Amplification(){
		this.content = $("#glass");
		this.box = $("#box");
		this.smalls = $(".small");
		this.boxImg = $("#box img");	
	}
	$.extend(Amplification.prototype,{
		init:function(){
			this.over();
		},
		over:function(){
			var _this = this;
			this.smalls.mouseover(function() {
				var src = $(this).attr("data-url");
				_this.boxImg.attr("src",src);
			})
			
		}
	})

	new Amplification().init()
	
}


