 
 function ajax(method,url,json,success,error){
 	var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft","XMLHTTP");
 		console.log(xhr.readyState);
 	var str = '';
 	for(var key in json){
 		str += "&"+key+"="+json[key];
 	}
 	str = str.substr(1);

 	if(method == "get"){
 	 	url = url+"?"+str;
 		xhr.open("get",url,true);
 		xhr.send();
 	}else{
 		xhr.open("post",url,true);
 		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
 		xhr.send(str);
 	}
 		console.log(xhr.readyState);
 	xhr.onreadystatechange = function(){
 		console.log(xhr.readyState);
 		if(xhr.readyState == 4 && xhr.status ==200){
 			var data = xhr.responseText;
 			
 			if(typeof data != "object" && data != ""){	
 				data = JSON.parse(data);
 			}
 			success && success(data);
 		}else{	
 		error && error(xhr.status);
 		}
 	}
 }