/*登录背景*/
var cw = document.body.clientWidth;
var ch = document.body.clientHeight;
var bgbox = $("#bg");
bgbox.css({
	width:cw,
	height:ch
})
function Login(){
	this.form = $("#form");
	this.tel = $("#tel");
	this.pwd = $("#pwd");
	this.code = $("#code");
	this.codes = $("#codes");
	this.loginbtn = $("#loginbtn");	
}
$.extend(Login.prototype,{
	init:function(){
		this.codes.html(randomCode(6));
		this.codes.click($.proxy(this.acode,this));
		this.loginbtn.on("click",$.proxy(this.ajaxsend,this));
		this.inspection();
	},
	acode:function(){
		this.codes.html(randomCode(6));
	},
	inspection:function() {
		this.form.on("click",$.proxy(this.formins,this))
	},
	formins:function(e){
			var _this = this;
			var target = e.target || e.srcElement;	
			/*验证码*/
			if(target.tagName == "INPUT"&& target.id == "code"){
				$(target).blur(function(){
					if($(this).val() == _this.codes.html()){
						$(this).next().next().html("√验证码输入正确");
						$(this).next().next().css({
							color:"green",
							display:"block"
						})
					}else{
						$(this).next().next().html("×验证码输入错误,区分大小写");
						$(this).next().next().css({
							color:"red",
							display:"block"
						})
					}
				})
				
			}
	},
	ajaxsend:function(){
		var utel = this.tel.val();
		var upwd = this.pwd.val();
		console.log(utel,upwd);
		$.ajax({
			type:"post",
			url:"http://localhost/work/yigu/src/php/login.php",
			data:{
				tel:utel,
				pwd:upwd
			},
			dataType:"json",
			success:$.proxy(this.info,this)
		})
	},
	info:function(data){
		console.log(data);
		if(data.status==1){
 			alert(data.info);
 			location.href = "../index.html";
 		}else if(data.status==2){
 			alert(data.info);
 			location.href = "login.html";
 		}else{
 			alert(data.info);
 		}
	}
})
new Login().init();