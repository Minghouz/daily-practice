/*顶部动画*/

function scrolltop(){
	this.header_logo = $("#header_logo1");
	this.lastTop = 0;
	this.basicLine = 600;
}
$.extend(scrolltop.prototype,{
	init:function(){
	
		this.scroll();
	},
	scroll:function(){
		window.onscroll = $.proxy(this.listen,this);
	},
	listen:function(){
			
		  	var currentTop = document.documentElement.scrollTop;
		    if(currentTop > this.basicLine &&  this.lastTop <= this.basicLine){
		       this.header_logo.animate({
		            top:'0'
		        },500);   
		      
		    }else if(currentTop <= this.basicLine && this.lastTop > this.basicLine){
		       this.header_logo.animate({
		            top:'-100'
		        },500);
		    }
		    this.lastTop = currentTop;
	}
})
new scrolltop().init();

/*二级导航*/
function Secondnav() {
	this.secnav = $("#sec_nav");
	this.item = $("#sec_nav .menu .item");
	this.closemenu = $(".close_menu");
}
$.extend(Secondnav.prototype,{
	init:function(){
		this.secnav.mouseover($.proxy(this.menushow))
		this.secnav.mouseout($.proxy(this.menuhide))
		this.item.mouseover($.proxy(this.itemover));
		this.item.mouseout($.proxy(this.itemout));
		this.closemenu.click($.proxy(this.click))
	},
	menushow:function(){
		$(this).find(".menu").css("display","block");
	},
	menuhide:function(){
		$(this).find(".menu").css("display","none");
	},
	itemover:function(){
		$(this).css({
			zIndex:30,
			"border":"1px solid #ccc",
			"border-right":"0"
		})
		$(this).children().eq(0).css({
			zIndex:20
		});
		$(this).children().eq(1).css({
			zIndex:5,
			display:"block",
			"box-shadow": "5px 0px 10px #ddd",
			"border-left":0,

		});
	},
	itemout:function(){
		$(this).css({
			zIndex:30,
			"border":"0"
		})
		$(this).children().eq(0).css({
			zIndex:20,
			"border":"0"
		});
		$(this).children().eq(1).css({
			zIndex:5,
			display:"none"
		});
	},
	click:function(){
		$(this).parent().css("display","none");
	}
})
new Secondnav().init();




function Fixnav(){
	this.toolhovers = $(".tool_hover");
	this.tooltexts = $(".toolbar_text");
	this.texttimer = null;
}
$.extend(Fixnav.prototype,{
	init:function(){
	this.toolhovers.mouseover($.proxy(this.thover));
	this.toolhovers.mouseout($.proxy(this.tout));
	},
	thover:function(){
		clearInterval(this.texttimer);
		var c = 0;
		var l ;
		this.texttimer = setInterval($.proxy(this.movein,this),1000)
	},
	movein:function(){
		c = 2;
		console.log($(this));
		if($(this).next().position().left >= -62){
			clearInterval(this.texttimer);
		}else{
			l = $(this).next().position().left +c;
			console.log($(this).next().position().left);
			console.log(l);
			$(this).next().css("left",l);
			$(this).next().css("opacity",1);
		}
	},
	tout:function(){
		clearInterval(this.texttimer);
		var c = 0;
		var le;
		this.texttimer = setInterval($.proxy(this.moveout,this),1000)
	},
	moveout:function(){
		c = 2;
		if($(this).next().position().left <= -100){
			clearInterval(this.texttimer);
		}else{
			le = $(this).next().position().left-c;
			$(this).next().css("left",le);
			$(this).next().css("opacity",0);
		}
	}
})
//new Fixnav().init();

/*右边固定栏动画*/
var toolhovers = $("#right_w .tool_hover");
var tooltexts = $("#right_w .toolbar_text");
var texttimer = null;
	toolhovers.mouseover(function(e){
		toolhover(this);
	})
	toolhovers.mouseout(function(){
		toolout(this);
	})

function toolhover(obj){
	clearInterval(texttimer);
	var c = 0;
	var l ;
	texttimer = setInterval(function(){
		c = 2;
		if($(obj).next().position().left >= -62){
			clearInterval(texttimer);
		}else{
			l = $(obj).next().position().left +c;
			$(obj).next().css("left",l);
			$(obj).next().css("opacity",1);
		}
	},30)
}
function toolout(obj){
	clearInterval(texttimer);
	var c = 0;
	var le;
	texttimer = setInterval(function(){
		c = 2;
		if($(obj).next().position().left <= -100){
			clearInterval(texttimer);
		}else{
			le = $(obj).next().position().left-c;
			$(obj).next().css("left",le);
			$(obj).next().css("opacity",0);
		}
	},30)
}

var toolbar3 = $(".toolbar3").eq(0);
toolbar3.onclick = function(){
	document.documentElement.scrollTop = document.body.scrollTop = 0;
}