function Crefixnav(ele) {
	this.element = ele;
	this.init();
}
Crefixnav.Template = `
<div id="right_w">
	    <div class="right_fix">
	        <div class="toolbar2">
	            <div class="toolbar2_cen bor">
	             	<a href=""> <i class="iconfont icon-cart_light"></i><span>购</span><span>物</span><span>车</span><span class = "n">(0)</span></a>
	            </div>
	            <div class="toolbar2_cen">
	                <div class="toolbar_img tool_hover">
	                	<img src="http://www.tssgsc.com/images/shop_online2016/user_icon.png" alt="">
	                </div>
	                <div class="toolbar_text">
	                    <a href="##">我的资料</a>
	                    <div class="angle"></div>
	                </div>
	            </div>
	            <div class="toolbar2_cen">
	                 <div class="toolbar_img tool_hover">
	                 	<i class="iconfont icon-footprint"></i>
	                </div>
	                <div class="toolbar_text">
	                    <a href="##">我的足迹</a>
	                    <div class="angle"></div>
	                </div>
	            </div>
	            <div class="toolbar2_cen">
	             	<div class="toolbar_img tool_hover">
	             		<i class = "iconfont icon-favor_light"></i>
	                </div>
	                <div class="toolbar_text">
	                    <a href="##">我的收藏</a>
	                    <div class="angle"></div>
	                </div>
	            </div>
	            <div class="toolbar2_cen">
	             	<div class="toolbar_img tool_hover">
	                	<img src="http://www.tssgsc.com/images/shop_online2016/edit_icon.png" alt="">
	                </div>
	                <div class="toolbar_text">
	                    <a href="##">我要留言</a>
	                    <div class="angle"></div>
	                </div>
	            </div>

	        </div>
	        <div class="toolbar3">
	            <div class="toolbar2_cen">
	                 <div class="toolbar_img tool_hover">
	                	<img src="http://www.tssgsc.com/images/shop_online2016/return_top.png" alt="">
	                </div>
	                <div class="toolbar_text">
	                    <a href="##">回到顶部</a>
	                    <div class="angle"></div>
	                </div>
	            </div>  
	        </div>
	    </div>
	</div>
`;
$.extend(Crefixnav.prototype,{
	init:function(){
		this.createDom();
	},
	createDom:function(){
		this.content = $("<div></div>").append(Crefixnav.Template);
		this.element.append(this.content);
	}
})