/*----------------------轮播图*/
function Banner() {
	this.banner = document.getElementById("banner");
	this.ul = this.banner.getElementsByTagName("ul")[0];
	this.lis = this.ul.getElementsByTagName("li");
	this.abtns = document.querySelectorAll("#banner>a");
	this.indicator = document.getElementById("indicator");
	this.indicators = this.indicator.getElementsByTagName("span");
	this.iw = this.lis[0].offsetWidth;
	/*克隆第一个孩子加入中*/
	this.li = this.lis[0].cloneNode(true);
	this.ul.appendChild(this.li);
	this.length = this.lis.length;
	this.ul.style.width = this.iw * this.length +"px";

	this.next = 0;
	this.timer = null;

	var _this = this;
	clearInterval(this.timer);
	this.timer = setInterval(function(){
	    _this.autoPlay();
	},2000)

	/*鼠标移入移出事件*/
	this.banner.onmouseover = function () {
	    clearInterval(_this.timer);
	}
	this.banner.onmouseout = function () {
	    _this.timer = setInterval(function(){
	        _this.autoPlay();
	    },2000)
	}
	/*左右点击事件*/
	//右边

	this.abtns[1].onclick = function(){
		console.log(_this);
		if(_this.next == _this.length-1){
			_this.next = 1;
			_this.ul.style.left = 0;
		}else{
			_this.next++;
			console.log(_this.next);
		}
		_this.play();
		
	}
	//左边
	 this.abtns[0].onclick = function(){
	 	console.log(_this);
		if(_this.next == 0){
			_this.next = this.length-2;
			_this.ul.style.left = (-_this.iw*(_this.length-1))+"px";
		}else{
			_this.next--;
		}
		_this.play();
	}
	
}
/*自动播放*/
Banner.prototype.autoPlay = function () {

	if(this.next == this.length-1){
	    this.next = 0;
	    this.ul.style.left = 0;
	}else{
	    this.next++;
	}
	this.play();
}
/*封装运动原理*/
Banner.prototype.play = function () {
	move(this.ul,{left:-this.next*this.iw});
	for(var i = 0;i<this.indicators.length;i++){
	    this.indicators[i].className = "";
	}
	if(this.next == this.indicators.length){
	    this.indicators[0].className = "active";
	}else{
	    this.indicators[this.next].className = "active";
	}
};
new Banner();

/*--------向页面添加数据-------*/

var hot_left = document.getElementById("hot_left");
var hot_right = document.getElementById("hot_right");
var dome_center_box = document.getElementById("dome_center_box");
var dome_right = document.getElementById("dome_right");
var impo_center_box = document.getElementById("impo_center_box");
var impo_right = document.getElementById("impo_right");
var drink_center_box = document.getElementById("drink_center_box");
var drink_right = document.getElementById("drink_right");
ajax("post","http://localhost/work/Fresh-fruit/php/select.php",{},function(data){

	/*热销水果*/

	var hot_l = '',hot_r='',dome_c='',dome_r='',impo_c='',impo_r='',drink_c='',drink_r='';
	for(var i = 0;i<3;i++){
		hot_l +=`
			<div class="hot_iteml" data-id="${data[i].fid}">
				<a href="#"><img src="${data[i].img}?${data[i].fid}" class="img" alt=""></a>
				<span>￥${data[i].price}</span>
				<a href="#">${data[i].info}</a>
			</div>
		`;
	}
	hot_left.innerHTML+=hot_l;

	for(var i = 3;i<9;i++){
		hot_r +=`
			<div class="hot_itemr" data-id="${data[i].fid}">
				<a href="#"><img src="${data[i].img}?${data[i].fid}" class="img" alt=""></a>
				<div class="text">
				<a href="#">${data[i].info}</a>
						<span>￥${data[i].price}</span>
				</div>
			</div>
		`;
	}
	hot_right.innerHTML+=hot_r;
	/*国产水果*/
	for(var i = 9;i<12;i++){
		dome_c +=`
			<div class="dome_item" data-id="${data[i].fid}">
				<a href="#"><img src="${data[i].img}?${data[i].fid}" class="img" alt=""></a>
				<span>￥${data[i].price}</span>
				<a href="#">${data[i].info}</a>
			</div>
		`;
	}
	dome_center_box.innerHTML+=dome_c;

	for(var i = 12;i<14;i++){
		dome_r += `
			<div class="dome_item" data-id="${data[i].fid}">
				<a href="#"><img src="${data[i].img}?${data[i].fid}" class="img" alt=""></a>
				<span>￥${data[i].price}</span>
				<a href="#">${data[i].info}</a>
			</div>
		`;
	}
	dome_right.innerHTML+=dome_r;
	/*进口水果*/
	for(var i = 14;i<17;i++){
		impo_c +=`
			<div class="impo_item" data-id="${data[i].fid}">
				<a href="#"><img src="${data[i].img}?${data[i].fid}" class="img" alt=""></a>
				<span>￥${data[i].price}</span>
				<a href="#">${data[i].info}</a>
			</div>
		`;
	}
	impo_center_box.innerHTML+=impo_c;

	for(var i = 17;i<19;i++){
		impo_r += `
			<div class="impo_item" data-id="${data[i].fid}">
				<a href="#"><img src="${data[i].img}?${data[i].fid}" class="img" alt=""></a>
				<span>￥${data[i].price}</span>
				<a href="#">${data[i].info}</a>
			</div>
		`;
	}
	impo_right.innerHTML+=impo_r;
	/*水果饮品*/
	for(var i = 19;i<22;i++){
		drink_c +=`
			<div class="drink_item" data-id="${data[i].fid}">
				<a href="#"><img src="${data[i].img}?${data[i].fid}" class="img" alt=""></a>
				<span>￥${data[i].price}</span>
				<a href="#">${data[i].info}</a>
			</div>
		`;
	}
	drink_center_box.innerHTML+=drink_c;

	for(var i = 22;i<24;i++){
		drink_r += `
			<div class="drink_item" data-id="${data[i].fid}">
				<a href="#"><img src="${data[i].img}?${data[i].fid}" class="img" alt=""></a>
				<span>￥${data[i].price}</span>
				<a href="#">${data[i].info}</a>
			</div>
		`;
	}
	drink_right.innerHTML+=drink_r;

	/*事件代理*/
	var main = document.getElementById("main");
	var buy_data = {};
	var pro_data = {};
	main.onclick = function(e){
		var e = e ||event;
		var target = e.target ||e.srcElement;

		 /*点击图片跳转到详情页面*/
		if(target.tagName =="IMG" && target.className == "img"){
		    let str = target.src;
		    let id = str.split("?")[1].split("=")[1];
		   for(let i = 0;i<data.length;i++){
		       if(id == data[i].id){
		           var text = target.parentNode.parentNode.getAttribute("data-id");
		           var m = pro_data[text];
		           if(!m){
		               m = 1;
		               pro_data[text]=m;
		           }
		          var product = JSON.stringify(pro_data);
		           setCookie("buy_data",product,2);
		           location.href = "html/buy.html";
		           break;
		       }
		   }
		}

	
	}
})
