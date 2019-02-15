/*注册背景*/
var cw = document.body.clientWidth;
var ch = document.body.clientHeight;
var bgbox = $("#bg");
bgbox.css({
	width:cw,
	height:ch
})
function Register() {
	this.form = $("#form");
	this.tel = $("#tel");
	this.pwd = $("#pwd");
	this.repwd = $("#repwd");
	this.code = $("#code");
	this.codes = $("#codes");
	this.regbtn = $("#regbtn");
}
$.extend(Register.prototype,{

	init:function() {
		this.codes.html(randomCode(6));
		this.inspection();
		this.regbtnclick();
		this.codes.on("click",$.proxy(this.acode,this));
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
			/*验证电话号码*/
			if(target.tagName == "INPUT" && target.id =="tel"){
				$(target).blur(function() {
					if(reg.tel.test($(this).val())){
						$(this).next().css({
							display:"block",
							color:"green"
						})
						$(this).next().html("√号码可用");

					}else{
						$(this).next().css({
							display:"block",
							color:"red"
						})
						$(this).next().html("×号码格式不正确");
					}
				})
			}
			/*验证密码*/
			if(target.tagName == "INPUT" && target.id =="pwd"){
				$(target).blur(function(){
					if(reg.password.test($(this).val())){
						$(this).next().html("√密码格式正确");
						$(this).next().css({
							color:"green",
							display:"block"
						})

					}else{
						$(this).next().html("×密码格式不证确，密码由6-20位数字、字母、下划线组成");
						$(this).next().css({
							color:"red",
							display:"block"
						})
					}
				})
			}
			/*重复密码*/
			if(target.tagName =="INPUT"&&target.id == "repwd"){
				$(target).blur(function(){
					if($(this).val() == _this.pwd.val()){
						$(this).next().html("√密码输入正确");
						$(this).next().css({
							color:"green",
							display:"block"
						})

					}else{
						$(this).next().html("×密码不一致");
						$(this).next().css({
							color:"red",
							display:"block"
						})
					}
				})	
			}
		
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
	regbtnclick:function() {	
		this.regbtn.on("click",$.proxy(this.ajax,this));
	},
	ajax:function(){
		var utel = this.tel.val();
		var upwd = this.pwd.val();
		console.log(utel,upwd);
		$.ajax({
			type:"post",
			url:"http://localhost/work/yigu/src/php/register.php",
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
 			alert("注册成功！");
 			location.href="login.html";
 		}
	}

})
new Register().init();