<?php
	header("content-type:text/html;charset=utf8"); 
	/*连接数据库*/
	$servername = "127.0.0.1";
	$user_name = "root";
	$user_pwd = "root";
	$db_name = "yigu";

	$connect = new mysqli($servername,$user_name,$user_pwd,$db_name);

	if($connect->connect_error){
		die("数据库链接失败！".$connect->connect_error);
	}
	/*设置字符编码*/
	$connect->query("set names utf8");
?>