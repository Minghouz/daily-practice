
ajax("post","http://localhost/work/Fresh-fruit/php/select.php",{},function(data){
	var box = document.getElementById("box");
    var abtn = document.querySelector(".btnList");
    var first = document.querySelector(".first");
    var last = document.querySelector(".last");
	var num = 6;
	var iow = 1;
	for(var k = 0;k<Math.ceil(data.length/num);k++){
		var a = document.createElement("a");
		a.innerHTML = k+1;
		a.id = "ibtn";
		abtn.insertBefore(a,last);
	}
	/*分页器点击*/
	var btn = document.querySelectorAll("#ibtn");
	btn[0].className="choose";
	console.log(btn);
	for(var i = 0;i<btn.length;i++){
    	btn[i].onclick = function(){
			iow = this.innerHTML;
			addli(iow);
			active();
			this.className = "choose";   	   	
    	}
	}
	/*上一页点击事件*/
	first.onclick = function(){
		if(iow<=0){
			iow=0;
		}else{
			iow--;
		}
		addli(iow);
		active();
		btn[iow-1].className = "choose";   
		console.log(iow,btn[iow]); 
	}
	/*下一页点击事件*/
	last.onclick = function(){
		if(iow>=btn.length){
			iow=btn.length;
		}else{
			iow++;
		}
		addli(iow);
		active();
		btn[iow-1].className = "choose"; 
		console.log(iow,btn[iow]); 
	}

	addli(iow);

	function addli(iow){
		var str = '';
    	for(var i = (iow-1)*5;i<Math.min(data.length,num*iow);i++){
    		str +=`<li data-id="${data[i].fid}">
			<img src="${data[i].img}?${data[i].fid}" class="img"/>
			<h5>${data[i].info}</h5>
			<span>￥${data[i].price}</span>
			<a href="#"  id="addShop">加入购物车</a>
			</li>`;
    	}
    	box.innerHTML = str;
	}

	function active(){
		for(var j = 0;j<btn.length;j++){
				btn[j].className ="";
			}
	}

	var addShop = document.getElementById("addShop");
	
	/*添加进入cookie*/
	var deta = {};
	var pro_data = {};
	box.onclick = function (e){
		var e = e || event;
		var target = e.target || e.which;
		console.log(target);
		if(target.tagName == "A" && target.id == "addShop"){
			var dataId =  target.parentElement.getAttribute("data-id");
			var n = deta[dataId];
			if(!n){
				n=1;
			 	deta[dataId]=n;
			}else{
				n++;
				deta[dataId]=n;
			}	
		}

		var strData = JSON.stringify(deta);
		setCookie("shop",strData,10);

		 /*点击图片跳转到详情页面*/
		if(target.tagName =="IMG" && target.className == "img"){
		    let str = target.src;
		    let id = str.split("?")[1].split("=")[1];
		   for(let i = 0;i<data.length;i++){
		       if(id == data[i].id){
		           var text = target.parentNode.getAttribute("data-id");
		           var m = pro_data[text];
		           if(!m){
		               m = 1;
		               pro_data[text]=m;
		           }
		          var product = JSON.stringify(pro_data);
		           setCookie("buy_data",product,2);
		           location.href = "buy.html";
		           break;
		       }
		   }
		}

	}

})
