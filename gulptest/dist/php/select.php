<?php 
	include("common.php");

	$sql = "select * from data";

	$res = mysqli_query($connect,$sql);

	$arr = array();

	while($data = mysqli_fetch_assoc($res)){

		array_push($arr,$data);

	}

		echo json_encode($arr);
?>