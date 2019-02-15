/*创建head*/
function Head(){
	this.head = $("#HEAD");
	this.foot = $("#FOOT");
	this.fixnav = $("#FIXNAV");
}
$.extend(Head.prototype,{
	init:function(){
		this.createDom();
	},
	createDom:function(){
		this.element = new CreHeader(this.head);
		this.element = new CreFooter(this.foot);
		this.element = new Crefixnav(this.fixnav);
	}
})
new Head().init();

/*localStorage添加数据*/

function Addproduct(){
    this.list = $("#list");
}
$.extend(Addproduct.prototype,{
    init:function(){
       $.ajax({
        type:"post",
        url:"http://localhost/work/yigu/src/php/select.php",
        data:{},
        dataType:"json",
        success:$.proxy(this.adddl,this)
       })
    },
    adddl:function(data){
        if(localStorage.getItem("buy_list")){
            var parse = JSON.parse(localStorage.getItem("buy_list"));
            var str = "";
            for(var k in parse){
                for(var i in data){
                    if(k == data[i].did){
                        var str = `<dl>
              <dd><input type="checkbox" class="choose"  checked="false" ></dd>
              <dd><img src="${data[i].img}"></dd>
              <dd><a href="#">${data[i].title}</a></dd>   
              <dd>¥<span id="price">${data[i].price}</span></dd>
              <dd><span id="decrease">-</span><span id="num">${parse[k]}</span><span id="increase">+</span></dd>
              <dd>¥<span id="sum">${data[i].price*parse[k]}</span></dd>
              <dd><a href="#" id="move">移入收藏</a><a href="#" id="del">删除</a></dd>
          </dl>`;
                        this.list.append(str);
                    }
                }
            }
        }
         if(localStorage.getItem("buy_shop")){
            var shop = JSON.parse(localStorage.getItem("buy_shop"));
            var str = "";
            for(var k in shop){
                for(var i in data){
                    if(k == data[i].did){
                        var str = `<dl>
              <dd><input type="checkbox" class="choose"  checked="false" ></dd>
              <dd><img src="${data[i].img}"></dd>
              <dd><a href="#">${data[i].title}</a></dd>   
              <dd>¥<span id="price">${data[i].price}</span></dd>
              <dd><span id="decrease">-</span><span id="num">${shop[k]}</span><span id="increase">+</span></dd>
              <dd>¥<span id="sum">${data[i].price*shop[k]}</span></dd>
              <dd><a href="#" id="move">移入收藏</a><a href="#" id="del">删除</a></dd>
          </dl>`;
                        this.list.append(str);
                    }
                }
            }
        }
        if(localStorage.getItem("shop")){
            var detail = JSON.parse(localStorage.getItem("shop"));
            var str = "";
            for(var k in detail){
                for(var i in data){
                    if(k == data[i].did){
                        var str = `<dl>
              <dd><input type="checkbox" class="choose"  checked="false" ></dd>
              <dd><img src="${data[i].img}"></dd>
              <dd><a href="#">${data[i].title}</a></dd>   
              <dd>¥<span id="price">${data[i].price}</span></dd>
              <dd><span id="decrease">-</span><span id="num">${detail[k]}</span><span id="increase">+</span></dd>
              <dd>¥<span id="sum">${data[i].price*detail[k]}</span></dd>
              <dd><a href="#" id="move">移入收藏</a><a href="#" id="del">删除</a></dd>
          </dl>`;
                       this.list.append(str);
                    }
                }
            }
        }
    }
})
    new Addproduct().init();

/*创建列表*/

function List(){
	this.section = $("#section");
	this.listbox = $("#list");
	this.all1 = $("#all1");
	this.all2 = $("#all2");
	this.chooses = $("#list .choose");
	this.price = $("#price");
	this.decrease = $("#decrease");
	this.increase = $("#increase");
	this.num = $("#num");
	this.sum = $("#sum");
	this.del = $("#del");
	this.btn = $("#btn");
	this.countNum = $("#countNum");
	this.total = $("#total");
	this.totalPrice = 0;
	this.totalNum = 0;
}
$.extend(List.prototype,{
	init:function(){
		this.selectall();
		this.events();
	},
	selectall:function(){
		for(var k =0;k<this.chooses.length;k++){
	        this.chooses.eq(k).click($.proxy(this.choosecheck,this));
	    }
	},
	choosecheck:function(){
		var flag = true;
        for(var j =0;j<this.chooses.length;j++){
            if(!this.chooses.eq(j).prop("checked")){
                flag = false;
                break;
            }
        }
        if(flag){
            this.all1.prop("checked",true);
            this.all2.prop("checked",true);
        }else {
            this.all1.prop("checked",false);
            this.all2.prop("checked",false);
        }
	},
	events:function(){
		this.section.click($.proxy(this.targets,this));
	},
	targets:function(e){
		var _this = this;
		var target = e.target||e.srcElement;
		        /*实现全选与反选*/
        if(target.tagName == "INPUT" && target.id == "all1"||target.tagName == "INPUT" && target.id == "all2"){
           if(target.id == "all1"){
                 if($(target).prop("checked")){
                    for(var i = 0;i<this.chooses.length;i++){
                        this.chooses.eq(i).prop("checked",true);
                    }
                    this.all2.prop("checked",true);
                }else {
                    for(var i = 0;i<this.chooses.length;i++){
                        this.chooses.eq(i).prop("checked",false);
                    }
                    this.all2.prop("checked",false);
                }
            }else{
                if($(target).prop("checked")){
                    for(var i = 0;i<this.chooses.length;i++){
                        this.chooses.eq(i).prop("checked",true);
                    }
                    this.all1.prop("checked",true);
                }else {
                    for(var i = 0;i<this.chooses.length;i++){
                        this.chooses.eq(i).prop("checked",false);
                    }
                    this.all1.prop("checked",false);
                }
            }
        }
        /*实现数量增加*/
        if(target.tagName =="SPAN"&&target.id =="increase"){
            var num = Number($(target).prev().html());
            num++;
            var price = Number($(target).parent().prev().find("#price").html());
            $(target).prev().html(num);
            $(target).parent().next().first().html("￥"+num*price);
           
        }
        /*实现数量减少*/
        if(target.tagName =="SPAN"&&target.id =="decrease"){
            var num = Number($(target).next().html());
            num--;
            if(num<0){
                num = 0;
                return;
            }
            var price = Number($(target).parent().prev().find("#price").html());
            $(target).next().html(num);
            $(target).parent().next().first().html("￥"+num*price);
        }

        /*商品删除*/
        if(target.tagName == "A" && target.id == "del"){
            $(target).parent().parent().remove();
        }

        /*计算选中的价格*/
        if(target.tagName == "INPUT" && target.className =="choose" && target.checked == true){
            var s_price = Number($(target).parent().parent().find("#price").html());
            var s_num = Number($(target).parent().parent().find("#num").html());
            this.totalPrice += s_price;
            this.totalNum += s_num;
        }
        if(target.tagName == "INPUT" && target.className =="choose" && target.checked == false){
            var s_price = Number($(target).parent().parent().find("#price").html());
            var s_num = Number($(target).parent().parent().find("#num").html());
            this.totalPrice -= s_price;
            this.totalNum -= s_num;
        }
       	this.countNum.html(this.totalNum);
        this.total.html( this.totalPrice );
	}
})
new List().init();
