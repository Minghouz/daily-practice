/*------------------随机整数--------------------------*/
function randomInt(m,n) {
    return parseInt(m+Math.random()*(n-m+1));
}
/*------------------冒泡排序--------------------------*/
/*从小到大*/
function  bubbleSortMax(arr) {
    var temp;
    for(var i = 0;i<arr.length-1;i++){
        for(var k = 0;k<arr.length-i-1;k++){
            if(arr[k]>arr[k+1]){
                temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
        }
    }
    return arr;
}
/*从大到小*/
function  bubbleSortMin(arr) {
    var temp;
    for(var i = 0;i<arr.length-1;i++){
        for(var k = 0;k<arr.length-i-1;k++){
            if(arr[k]<arr[k+1]){
                temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
        }
    }
    return arr;
}
/*----------------------------选择排序------------------------------*/
/*从小到大*/
function selectionSortMax(arr) {
    var temp;
    for (var i = 0;i<arr.length-1;i++){
        for(var k =i+1;k<arr.length;k++){
            if(arr[i]>arr[k]){
                temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
}
/*从大到小*/
function selectionSortMin(arr) {
    var temp;
    for (var i = 0;i<arr.length-1;i++){
        for(var k =i+1;k<arr.length;k++){
            if(arr[i]<arr[k]){
                temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
}
/*--------------------判断数组中是否存在一个数----------------------*/
function isExist(arr,num) {
    var bStop = false;
    for (var i = 0;i<arr.length;i++){
        if(arr[i]==num){
            bStop = true;
            break;
        }
    }
    return bStop;
}
/*---------------------对一个数组中的值去重-----------------------*/
/*去重方法一*/
function noRepeat1(arr) {
    for (var i = 0;i<arr.length;i++){
        for(var j = arr.length-1;j>=i+1;j--){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
}
/*去重方法二,调用是否存在函数*/
function noRepeat2(arr) {
    var newArr = [];
    for (var i = 0;i<arr.length;i++){
        if(!has(newArr,arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
/*去重方法三*/

/*---------------------求数组中的最大数-----------------------*/
function arrMax(arr) {
    var max = arr[0];
    for (var i=0; i<arr.length-2;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
/*---------------------求数组中的最小数---------------------*/
function arrMin(arr) {
    var min = arr[0];
    for (var i=0; i<arr.length-2;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
/*----------------在排好序的数组中插入一个数-----------------*/
/*插入数值方法一*/
function insertNum1(arr,num) {
    for (var i = 0;i<arr.length;i++){
        if(num >=arr[i] && num<arr[i+1]){
            arr.splice(i,0,num);
            break;
        }
    }
    return arr;
}
/*插入数值方法二*/
function insertNum2(arr,num) {
    var index;
    for (var i = 0;i<arr.length;i++){
        if(num >=arr[i] && num<arr[i+1]){
            index = i;
            break;
        }
    }
    arr.splice(index,0,num);
    return arr;
}
/*-------------------判断一个字符串的首字母是大写还是小写------------------*/
function isUpperStart(str) {
    if(str.charCodeAt(0)>=65 && str.charCodeAt(0)<=90){
        return true;
    }
    return false;
}
/*----------------统计字符串里面的大写字母和小写字母的个数------------------*/
/*方法一:前提是:字符串是由构造函数创建出来的*/
function UpLowNumber1(str) {
    var count1 = 0;
    var count2 = 0;
    for(var i =0;i<str.length;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            count1++;
        }else if(str.charCodeAt(i)>=92 && str.charCodeAt(i)<=122){
            count2++;
        }
    }
    return "大写个数:"+count1+" 小写个数:"+count2;
}
/*方法二:字符串需要转换为数组*/
function UpLowNumber2(str) {
    var count1 = 0;
    var count2 = 0;
    var str =str.split("");
    for(var i =0;i<str.length;i++){
        if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90){
            count1++;
        }else if(str[i].charCodeAt()>=92 && str[i].charCodeAt()<=122){
            count2++;
        }
    }
    return "大写个数:"+count1+" 小写个数:"+count2;
}
/*--------------------------随机生成十六进制颜色-------------------------*/
/*解决了颜色兼容问题*/
function randomColor1() {
    var r = randomInt(0,255);
    var g = randomInt(0,255);
    var b = randomInt(0,255);

    r = r.toString(16).length >= 2 ? r.toString(16) : "0"+r.toString(16);
    g = g.toString(16).length >= 2 ? g.toString(16) : "0"+g.toString(16);
    b = b.toString(16).length >= 2 ? b.toString(16) : "0"+b.toString(16);

    return "#"+r+g+b;
}
/*------------------------------不足两位数补0---------------------------*/
function reZero(n) {
    if(n<10){
        return "0"+n;
    }else{
        return n;
    }

}
/*--------------------------------元素选择器------------------------------*/
function $(selection) {
    return document.querySelector(selection);
}
/*-------------------------------返回顶部------------------------------*/
function backTop(id) {
    var ch = parseInt(document.documentElement.clientHeight/2-50);
    // console.log(h);//屏幕的高度
    id.style.top = ch +"px";
    window.onscroll = function () {
        var bh =  document.documentElement.scrollTop || document.body.scrollTop;
        id.style.top = ch + bh +"px";
        // console.log(ch,n);//屏幕的高度+滚动的高度,不加滚动的高度,方块会随着body滚动
    };
    id.onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    };
}
/*------------------------------进度条----------------------------------*/
/*box与bar与percent都是选中的元素*/
function progressBar(box,bar,percent) {
    var timer =  setInterval(function () {
        var bw = box.offsetWidth;
        var b = bar.offsetWidth;
        if(b>bw){
            clearInterval(timer);
        }else {
            var n =Math.ceil((b/bw)*100) ;
            var sw = parseInt(Math.random()*9+1);
            if(n>=99){n=100;}
            bar.style.width = b + sw +"px";
            percent.innerHTML = n +"%";
        }

    },100)
}
/*------------------设置与获取自定义属性以及非行内样式------------------*/
function setGetAttr(obj,attr,attrval) {
    if(arguments.length == 2){
        return arguments[0].getAttribute(arguments[1]);
    }else if(arguments.length == 3){
        arguments[0].setAttribute(arguments[1],arguments[2]);
    }
}
    /*设置cookie*/
function setCookie(_name,val,expires){
    var d = new Date();
    d.setDate(d.getDate()+expires);
    document.cookie = _name+"="+val+";path=/;expires="+d.toGMTString();
}
/*获取cookie*/
function getCookie(_name){
    var cookie = document.cookie;
    var arr = cookie.split("; ");
    for(var i = 0;i<arr.length;i++){ 
      var newArr = arr[i].split("=");
        if(_name==newArr[0]){
            return newArr[1];
        }
    }  
}
/*删除cookie*/
function removeCookie(_name,val){
    setCookie(_name,val,-1);
}
/*正则表达式命名空间*/
var reg = {
    userName:/^[a-zA-Z0-9_-]{3,16}$/,
    passWord:/[a-zA-Z0-9_-]{6,18}/,
    tel:/^13|15|17|18|19[0-9]{9}$/,
    system:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
    email:/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    email2:/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/,
    url:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    IP:/((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/,
    IP2:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    htmlTag:/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,
    unicode:/^[\u2E80-\u9FFF]+$/,
    number:/^\d+$/,
    string:/^[a-zA-Z]+$/,
    strNum:/([a-zA-Z0-9]+)/,
    mixture:/^[a-zA-Z_]\d*$/
}


var regs = {
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
    for(var j =65;j<=122;j++){
        var n = String.fromCharCode(j);
        arr.push(n);
    }
    /*生成验证码*/
    for(var k =0; k<length;k++){
        code.push(arr[parseInt(Math.random()*36)]);
    }
    /*将数组验证码转换为字符串验证码*/
    var s = code.join("");
    return s;
}
/*-----------------------------获取非行间样式---------------------------*/
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
/*-----------------------------封装运动框架-----------------------------*/
function move(obj,JSON,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var attr in JSON){
            /*判断是否是透明度以及获取运动属性的初始值*/
            var iCur;
            if(attr == "opacity"){
                iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
            }else{
                iCur = parseInt(getStyle(obj,attr));
            }
            /*算运动速度：设置的终点值-起始值*/
            var speed = (JSON[attr] - iCur)/5;
            /*对速度做取整处理*/
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            /*判断是否运动到了终点条件*/
            if(JSON[attr]!= iCur){
                flag = false;
            }
            /*判断运动的属性是否是透明度*/
            if(attr == "opacity"){
                obj.style.opacity = (iCur+speed)/100;
                obj.style.filter = "alpha(opacity:"+(iCur+speed)/100+")";
            }else{
                obj.style[attr] = (iCur + speed) +"px";
            }
        }
        /*判断运动是否结束以及是否有回调函数*/
        if(flag){
            clearInterval(obj.timer);
            fn && fn();
        }
    },30)
}
