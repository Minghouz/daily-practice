var listbox = document.querySelector("#list");
var section = document.querySelector("#section");

var btnSum = document.querySelector("#btn");
var counts = document.querySelector("#countNum");
var totals = document.querySelector("#total");
var totalPrice = 0;
var totalNum = 0;
/*利用cookie向页面添加数据*/
ajax("post","http://localhost/work/Fresh-fruit/php/select.php",{},function(data){
    if(getCookie("buy_list")){
        var parse = JSON.parse(getCookie("buy_list"));
        var str = "";
        for(var k in parse){
            for(var i in data){
                if(k == data[i].fid){
                    var str = ` <tr>
            <td><input type="checkbox" class="choose"></td>
            <td><img src="${data[i].img}"></td>
            <td><a href="#">${data[i].info}</a></td>
            <td><span id="price">¥<span>${data[i].price}</span></span></td>
            <td><span id="decrease">-</span><span id="num">${parse[k]}</span><span id="increase">+</span></td>
            <td id="sum">¥<span>${data[i].price*parse[k]}</span></td>
            <td><a href="#" id="del">删除</a><a href="#" id="move">加入我的收藏</a></td>
        </tr>`;
                    listbox.innerHTML += str;
                }
            }
        }
    }
    if(getCookie("shop")){
        var detail = JSON.parse(getCookie("shop"));
        var str = "";
        for(var k in detail){
            for(var i in data){
                if(k == data[i].fid){
                    var str = ` <tr>
            <td><input type="checkbox" class="choose"></td>
            <td><img src="${data[i].img}"></td>
            <td><a href="#">${data[i].info}</a></td>
            <td><span id="price">¥<span>${data[i].price}</span></span></td>
            <td><span id="decrease">-</span><span id="num">${detail[k]}</span><span id="increase">+</span></td>
            <td id="sum">¥<span>${data[i].price*detail[k]}</span></td>
            <td><a href="#" id="del">删除</a><a href="#" id="move">加入我的收藏</a></td>
        </tr>`;
                    listbox.innerHTML += str;
                }
            }
        }
    }
})
window.onload = function(){
    /*实现全选与反选*/
    var all1 = document.getElementById("all1");
    var all2 = document.getElementById("all2");
    var chooses = document.getElementsByClassName("choose");
    console.log(chooses);

    for(var k =0;k<chooses.length;k++){
        chooses[k].onclick = function () {
            var flag = true;
            for(var j =0;j<chooses.length;j++){
                if(!chooses[j].checked){
                    flag = false;
                    break;
                }
            }
            if(flag){
                all1.checked = true;
                all2.checked = true;
            }else {
                all1.checked = false;
                all2.checked = false;
            }

        }
    }


    /*事件代理*/

    section.onclick = function (e) {
        var e = e || event;
        var target = e.target || e.which;
        /*实现全选与反选*/
        if(target.tagName == "INPUT" && target.id == "all1"||target.tagName == "INPUT" && target.id == "all2"){
           if(target.id == "all1"){
                 if(target.checked){
                    for(var i = 0;i<chooses.length;i++){
                        chooses[i].checked = true;
                    }
                    all2.checked = true;
                }else {
                    for(var i = 0;i<chooses.length;i++){
                        chooses[i].checked = false;
                    }
                    all2.checked = false;
                }
            }else{
                if(target.checked){
                    for(var i = 0;i<chooses.length;i++){
                        chooses[i].checked = true;
                    }
                    all1.checked = true;
                }else {
                    for(var i = 0;i<chooses.length;i++){
                        chooses[i].checked = false;
                    }
                    all1.checked = false;
                }
            }
        }
       
        /*实现数量增加*/
        if(target.tagName =="SPAN"&&target.id =="increase"){
            var num = Number(target.previousElementSibling.innerHTML);
            num++;
            var price = Number(target.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
            target.previousElementSibling.innerHTML = num;
            target.parentElement.nextElementSibling.firstElementChild.innerHTML = num*price;
        }
        /*实现数量减少*/
        if(target.tagName =="SPAN"&&target.id =="decrease"){
            var num = Number(target.nextElementSibling.innerHTML);
            num--;
            if(num<0){
                num = 0;
                return;
            }
            var price = Number(target.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerHTML);
            target.nextElementSibling.innerHTML = num;
            target.parentElement.nextElementSibling.firstElementChild.innerHTML = num*price;
        }

        /*商品删除*/
        if(target.tagName == "A" && target.id == "del"){
            target.parentNode.parentNode.remove();
        }
        /*删除选中的商品*/
        if(target.tagName == "A" && target.id == "remove"){
            for(var i = 0;i<chooses.length;i++){
                if(chooses[i].checked==true){
                    chooses[i].parentElement.parentElement.remove();
                }

            }
        }
        /*计算选中的价格*/
        if(target.tagName == "INPUT" && target.className =="choose" && target.checked == true){
            var s_price = Number(target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML);
            var s_num = Number(target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML);
            console.log(s_num,s_price)
            totalPrice += s_price;
            totalNum += s_num;
        }

        if(target.tagName == "INPUT" && target.className =="choose" && target.checked == false){
            var s_price = Number(target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML);
            var s_num = Number(target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML);
            totalPrice -= s_price;
            totalNum -= s_num;
        }
        totals.innerHTML="$"+totalPrice;
        counts.innerHTML=totalNum;
    }
}

