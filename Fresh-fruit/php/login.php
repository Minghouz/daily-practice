<?php
	/*连接数据库*/
	$servername = "127.0.0.1";
	$username = "root";
	$password = "root";
	$db_name = "fruit";

	$connect = new mysqli($servername,$username,$password,$db_name);

	if($connect->connect_error){
		die("数据库连接失败！".connect_error);
	}

	$connect->query("set names utf8");

	$uname = $_REQUEST["uname"];
	$upwd = $_REQUEST["upassword"];

	$sql = "select * from users where username = '$uname'";

	$res = mysqli_query($connect,$sql);

	$n = mysqli_num_rows($res);
	
	if(!$n){
		echo json_encode(array("status"=>0,"info"=>"用户名不存在！"));
	}else{
		$arr = mysqli_fetch_assoc($res);

		if($arr["password"]==$upwd){
			echo json_encode(array("status"=>1,"info"=>"登录成功！"));
		}else{
			echo json_encode(array("status"=>2,"info"=>"密码错误！"));
		}
	}
?>