<?php
	/*连接数据库*/
	$servername = "127.0.0.1";
	$user_name = "root";
	$user_pwd = "root";
	$db_name = "fruit";

	$connect = new mysqli($servername,$user_name,$user_pwd,$db_name);

	if($connect->connect_error){
		die("数据库链接失败！".$connect->connect_error);
	}
	
	/*设置字符编码*/
	$connect->query("set names utf8");


	/*接收请求*/
	$uname = $_REQUEST["uname"];
	$upwd = $_REQUEST["upassword"];
	$uemail = $_REQUEST["uemail"];
	$utel = $_REQUEST["utel"];
	
	$sql = "insert into `users` (`username`,`password`,`email`,`tel`) values ('$uname','$upwd','$uemail','$utel')";
	
	$row = mysqli_query($connect,$sql);
	if($row){
		echo json_encode(array("status"=>1,"info"=>"注册成功！"));
	}else{
		echo json_encode(array("status"=>0,"info"=>"注册失败！"));
	}
?>