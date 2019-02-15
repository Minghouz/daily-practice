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

function Adddata(){
	this.box = $("#box");

}
$.extend(Adddata.prototype,{
	init:function(){
		$.ajax({
			type: 'get',
			url: 'http://localhost/work/yigu/src/php/select.php',
			dataType: 'json',
			success:$.proxy(this.updatedata,this)
		})
	},
	updatedata:function(data){
		var num = data.length;
		layui.use('laypage', function(){
			  var laypage = layui.laypage;
			  laypage.render({
			    elem: 'btnList'
			    ,count: num ,
			    limit:6,
			    groups:3,
			    prev:"上一页",
			    next:"下一页",
			    jump: function(obj){
			    	var str = "";
					for(var i=(obj.curr-1)*obj.limit;i<Math.min(num,obj.limit*obj.curr);i++){
						str+=`<li  class="shmove" data-id="${data[i].did}">
							<img src="${data[i].img}?${data[i].did}" class="img" alt="">
							<div class="pro_text">
							<h3 class="img">${data[i].title}</h3>
							<p><span class="fl">￥${data[i].mprice}</span><span class="fr">￥${data[i].price}</span></p>
						</div>
							<span id="addshop"><em class="img" data-id="${data[i].did}">加入购物车</em></span>
					</li>`
					}
					$("#box").html(str);
			    }
			  });
		});

		var buy_data = {};
		var pro_data = {};
		this.box.click(function(e){
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
			           location.href = "details.html";
			           break;
			       }
			   }
			}
			console.log(target);
			if(target.tagName == "EM"){
	            var id = $(target).attr("data-id");
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
	            localStorage.setItem("shop",b_data);
	           // location.href = "list.html";
	       	}
		})

	}
})
	new Adddata().init();

