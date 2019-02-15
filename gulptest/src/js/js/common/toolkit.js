/*------------------随机整数--------------------------*/
function randomInt(m,n) {
    return parseInt(m+Math.random()*(n-m+1));
}
/*验证表单*/
var reg = {
    username : /^[a-zA-Z0-9]{3,16}$/,
    password :/^\w{6,20}$/,
    number : /^\d{6,20}$/,
    string : /^[a-zA-Z]{6,20}$/,
    numstr: /^[a-zA-Z0-9]{6,20}$/,
    email : /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(cn)|(com)$/,
    tel : /^13|15|17|18|19[0-9]{9}$/
}
/*-----------------------------生成随机验证码---------------------------*/
function randomCode(length) {
    var  arr = [];
    var  code = [];
    /*添加数字*/
    for(var i =0;i<10;i++){
        arr.push(i);
    }
    /*添加字母*/
    for(var k =97;k<=122;k++){
        var m = String.fromCharCode(k);
        arr.push(m);
    }
    for(var j =65;j<=90;j++){
        var n = String.fromCharCode(j);
        arr.push(n);
    }
    /*生成验证码*/
    for(var k =0; k<length;k++){
        code.push(arr[parseInt(Math.random()*62)]);
    }
    /*将数组验证码转换为字符串验证码*/
    var s = code.join("");
    return s;
}