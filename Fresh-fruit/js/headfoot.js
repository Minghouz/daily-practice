/*分享到*/

var box = document.getElementById("block");
var tit = document.querySelector("#block .tit");
var timer = null;
box.onmouseover = function(){ move1(this); }
box.onmouseout = function(){ move2(this); }
function move1(obj){
    clearInterval(timer);
    timer = setInterval(function(){
        var l = 0;
        l+=5;
        if((obj.offsetLeft) >= 0){
           clearInterval(timer);
        }else{
            obj.style.left = obj.offsetLeft+l+"px";
        }
    },30);
}
function move2(obj){
    clearInterval(timer);
    timer = setInterval(function(){
        var l = 0;
        l-=5;
        if((obj.offsetLeft)<= -200){
            clearInterval(timer);
        }else{
            obj.style.left = obj.offsetLeft+l+"px";
        }
    },30);
}

/*右边固定栏动画*/
var toolhovers = document.querySelectorAll("#right_w .tool_hover");
var tooltexts = document.querySelectorAll("#right_w .toolbar_text");
var texttimer = null;
for(var i = 0;i<toolhovers.length;i++){
	toolhovers[i].onmouseover = function(){
		toolhover(this);
	}
}
for (var j = 0; j <toolhovers.length; j++) {
	toolhovers[j].onmouseout = function(){
		toolout(this);
	}
}
function toolhover(obj){
	clearInterval(texttimer);
	var left = 0;
	texttimer = setInterval(function(){
		left = 2;
		if(obj.nextElementSibling.offsetLeft>= -62){
			clearInterval(texttimer);
		}else{
			obj.nextElementSibling.style.left =obj.nextElementSibling.offsetLeft+left +"px";
			obj.nextElementSibling.style.opacity =1;
		}
	},30)
}
function toolout(obj){
	clearInterval(texttimer);
	var left = 0;
	texttimer = setInterval(function(){
		left = 2;
		if(obj.nextElementSibling.offsetLeft<= -100){
			clearInterval(texttimer);
		}else{
			obj.nextElementSibling.style.left =obj.nextElementSibling.offsetLeft-left +"px";
			obj.nextElementSibling.style.opacity =0;
		}
	},30)
}

var toolbar3 = document.getElementsByClassName("toolbar3")[0];
toolbar3.onclick = function(){
	document.documentElement.scrollTop = document.body.scrollTop = 0;
}