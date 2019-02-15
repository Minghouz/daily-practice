

/*向页面加载数据*/
var maxglass = document.getElementById("maxglass");
var pro_box_text = document.getElementById("pro_box_text");
var pro_intro_imgs = document.getElementById("pro_intro_imgs");

ajax("post","http://localhost/work/Fresh-fruit/php/select.php",{},function(data){
    /*通过cookie向页面添加数据*/
    if(getCookie("buy_data")){
        var cookie = JSON.parse(getCookie("buy_data"));
        var m = "";
        var t = "";
        var imgarr=[];
        for(k in cookie){
            for(var i = 0;i<data.length;i++){
                if(k == data[i].fid){
                    // src = ${data[i].img};
                    /*放大镜*/
                     m =`
                        <div class="small">
                            <img src="${data[i].img}" alt="">
                            <div class="filter"></div>
                        </div>
                        <div class="big">
                            <img src="${data[i].img}" alt="">
                        </div>
                     `;
                     /*商品价格*/
                     t = `
                        <h2>${data[i].info}</h2>
                        <div class="p">价格<span id = "price">${data[i].price}</span>元</div>
                        <div class="sales">
                            <span>累计销量0</span>
                            <span>累计评价0</span>
                        </div>
                        <div class="count">
                            <div>购买数量</div>
                            <div class="count_num">
                                <div id="num">1</div>
                                <div class="btns">
                                    <a id="add">+</a>
                                    <a id="dre">-</a>
                                </div>
                            </div>
                            <div><span>总计</span><span id="sum">${data[i].price}</span>元</div>
                        </div>
                        <div class="buy">
                            <a href="#" class="buybuy" data-id="${data[i].fid}">立即购买</a>
                            <a href="#" class="buyadd" data-id="${data[i].fid}"><i></i>加入购物车</a>
                        </div>
                     `;
                     imgarr = JSON.parse(data[i].intro);

                     maxglass.innerHTML += m;
                     pro_box_text.innerHTML += t;
                }
            }
        }
 
        for(var i in imgarr){
             var img = document.createElement("img");
             img.src = imgarr[i];
             pro_intro_imgs.appendChild(img);
        }
    }


   
})

window.onload = function(){
    /*放大镜*/
    var filter = document.querySelector(".filter");
    var small = document.querySelector(".small");
    var big = document.querySelector(".big");
    small.onmouseenter = function (e){
        filter.style.display = "block";
        big.style.display = "block";
    }

    small.onmouseleave = function (e){
        filter.style.display = "none";
        big.style.display = "none";
    }

    small.onmousemove = function (e){
        var left = e.pageX - filter.offsetWidth / 2 - small.parentNode.offsetLeft;
        var top = e.pageY - filter.offsetHeight / 2 - small.parentNode.offsetTop;

        var maxLeft = small.offsetWidth - filter.offsetWidth;
        var maxTop = small.offsetHeight - filter.offsetHeight;

        // 限制边界
        left = left >= maxLeft ? maxLeft : (left <= 0 ? 0 : left);
        top = top >= maxTop ? maxTop : (top <= 0 ? 0 : top);


        filter.style.left = left + "px";
        filter.style.top = top + "px";


        var bigImgLeft = left / maxLeft * (big.firstElementChild.offsetWidth - big.offsetWidth);
        var bigImgTop = top / maxTop * (big.firstElementChild.offsetHeight - big.offsetHeight);
        big.firstElementChild.style.left = -bigImgLeft + "px";
        big.firstElementChild.style.top = -bigImgTop + "px";
    }

    /*购物车部分*/
    var pri = document.getElementById("price");
    var num = document.getElementById("num");
    var add = document.getElementById("add");
    var dre = document.getElementById("dre");
    var sum = document.getElementById("sum");
    let price = Number(pri.innerHTML);

    add.onclick = function(){
         var n = Number(num.innerHTML);
            n++;
            num.innerHTML = n;
            sum.innerHTML = n*price
    }
    dre.onclick = function(){
         var n = Number(num.innerHTML);
             if(n<1){
                n=1;
             }
            n--;
            num.innerHTML = n;
            sum.innerHTML = n*price
    }

    /*事件代理*/

    /*点击加入购物车*/
     var buy_data = {};
    pro_box_text.onclick = function(e){
        var e = e||event;
        var target = e.target || e.srcElement;
        console.log(target);
        if(target.tagName == "A" && target.className == "buybuy"){
            var id = target.getAttribute("data-id");
            var n = Number(num.innerHTML);
            buy_data[id] = n;
            var b_data = JSON.stringify(buy_data);
            setCookie("buy_list",b_data,5);
            location.href = "buy_list.html";
        }
        if(target.tagName == "A" && target.className == "buyadd"){
            var id = target.getAttribute("data-id");
            var n = buy_data[id];
             if(!n){
                 n = Number(num.innerHTML);
                 buy_data[id] = n;
             }else{
                 n++;
                 buy_data[id] = n;
             }
            var b_data = JSON.stringify(buy_data);
            setCookie("buy_list",b_data,5);
            location.href = "buy_list.html";
        }
    } 
}
