"use strict";var cw=document.body.clientWidth,ch=document.body.clientHeight,bgbox=$("#bg");function Login(){this.form=$("#form"),this.tel=$("#tel"),this.pwd=$("#pwd"),this.code=$("#code"),this.codes=$("#codes"),this.loginbtn=$("#loginbtn")}bgbox.css({width:cw,height:ch}),$.extend(Login.prototype,{init:function(){this.codes.html(randomCode(6)),this.codes.click($.proxy(this.acode,this)),this.loginbtn.on("click",$.proxy(this.ajaxsend,this)),this.inspection()},acode:function(){this.codes.html(randomCode(6))},inspection:function(){this.form.on("click",$.proxy(this.formins,this))},formins:function(t){var o=this,i=t.target||t.srcElement;"INPUT"==i.tagName&&"code"==i.id&&$(i).blur(function(){$(this).val()==o.codes.html()?($(this).next().next().html("√验证码输入正确"),$(this).next().next().css({color:"green",display:"block"})):($(this).next().next().html("×验证码输入错误,区分大小写"),$(this).next().next().css({color:"red",display:"block"}))})},ajaxsend:function(){var t=this.tel.val(),o=this.pwd.val();console.log(t,o),$.ajax({type:"post",url:"http://localhost/work/yigu/src/php/login.php",data:{tel:t,pwd:o},dataType:"json",success:$.proxy(this.info,this)})},info:function(t){console.log(t),1==t.status?(alert(t.info),location.href="../index.html"):2==t.status?(alert(t.info),location.href="login.html"):alert(t.info)}}),(new Login).init();