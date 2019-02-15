function CreFooter(ele) {
	this.element = ele;
	this.init();
}
CreFooter.Template = `
	<div id="footer">
	    <div class="footer_banner wrap">
	        <div class="foo_ban_item">   	
				<img src="../img/common/index-bottom-dao.png" class="fl" alt="">
				<div class="foo_ban_tit fl">
					<span class="size20">次日到达</span>
					<span>当天16点前下单第二天送达</span>
				</div>
	        </div>
	        <div class="foo_ban_item">   	
				<img src="../img/common/index-bottom-dai.png" class="fl" alt="">
				<div class="foo_ban_tit fl">
					<span class="size20">货到付款</span>
					<span>货到网银多种支付方式</span>
				</div>
	        </div>
	        <div class="foo_ban_item">   	
				<img src="../img/common/index-bottom-song.png" class="fl" alt="">
				<div class="foo_ban_tit fl">
					<span class="size20">冷链配送</span>
					<span>基地到餐桌全程冷链</span>
				</div>
	        </div>
	        <div class="foo_ban_item">   	
				<img src="../img/common/index-bottom-tui.png" class="fl" alt="">
				<div class="foo_ban_tit fl">
					<span class="size20">24小时退换货</span>
					<span>专业解答 为您解惑</span>
				</div>
	        </div>
	        <div class="foo_ban_item">   	
				<img src="../img/common/index-bottom-xuan.png" class="fl" alt="">
				<div class="foo_ban_tit fl">
					<span class="size20">基地优选食材</span>
					<span>依谷更懂您的需求</span>
				</div>
	        </div>
	    </div>
	    <div class="footer_news wrap">
	    	<div class="foo_news_left fl">
	    		<div class="foo_news_lup">
	    			<div class="foo_news_lup_img fl">
	    				<h3>依谷有话说:</h3>
	    				<img src="../img/common/1484587824775.jpg" alt="">
	    			</div>
	    			<div class="foo_news_lup_list fr">
	    				<a href="" class="sizeblod">关于系统升级客户热线、物流配送暂停服务公告</a>
	    				<a href="">尊敬的客户： 您好！为了能给客户带来更好的服务，依谷网将于3月11日—3月13日对网站系统进行设备检修和升级，</a>
	    				<a href="" class="sizeblod">关于客户热线4001100755暂停服务的通知 </a>
	    				<a href="">尊敬的依谷网客户：您好，值此新春佳节来临之际，为了不影响您正常购物，现将春节期间客服电话服务和放假时间</a>
	    				<a href="" class="sizeblod">春节期间依谷网快递停发通知！</a>
	    				<a href=""> 亲爱的谷东们：您好！由于临近年关以及大雪天气原因，快递已经开始停发部分省份的收件业务！我们将于2月5日</a>
	    			</div>
	    		</div>
	    		<div class="foo_news_lbo">
	    			<dl class="fl">
	    				<dt class="sizeblod">购物指南</dt>
	    				<dd>会员注册</dd>
	    				<dd>套餐卡使用方法</dd>
	    				<dd>谷穗卡使用方法</dd>
	    				<dd>积分兑换</dd>
	    			</dl>
	    			<dl class="fl">
	    				<dt class="sizeblod">付款方式</dt>
	    				<dd>线上支付</dd>
	    				<dd>发票说明</dd>
	    				<dd>货到付款</dd>
	    				<dd>余额支付</dd>
	    			</dl>
	    			<dl class="fl">
	    				<dt class="sizeblod">商品配送</dt>
	    				<dd>买家自取</dd>
	    				<dd>配送时间</dd>
	    				<dd>冷链配送</dd>
	    				<dd>送货范围及费用</dd>

	    			</dl>
	    			<dl class="fl">
	    				<dt class="sizeblod">售后服务</dt>
	    				<dd>签收与评价</dd>
	    				<dd>常见问题</dd>
	    				<dd>退换货说明</dd>
	    				<dd>品质保障</dd>
	    			</dl>
	    		</div>
	    	</div>
	    	<div class="foo_news_right fr">
	    		<div class="foo_news_rimg">
	    			<a href=""><img src="../img/common/index-about.jpg" alt=""></a>
	    			<a href=""><img src="../img/common/index-commonweal.jpg" alt=""></a>
	    			<a href=""><img src="../img/common/index-job.jpg" alt=""></a>
	    			<a href=""><img src="../img/common/index-statement.jpg" alt=""></a>
	    		</div>
	    		<div class="foo_news_rcode">
	    			<a href="" class="fl">
	    				<span class="sizeblod">依谷微信</span>
	    				<img src="../img/common/index-bottom-ygw-wx.jpg" alt="">
	    			</a>
	    			<a href="" class="fr">
	    				<span class="sizeblod">依谷网App</span>
	    				<img src="../img/common/index-bottom-ygw-app.jpg" alt="">
	    			</a>
	    		</div>
	    	</div>
	    </div>
		<div class="footer_links">
			<a href="">关于依谷</a>
			<a href="">| 加入依谷</a>
			<a href="">| 联系依谷</a>
			<a href="">| 免责申明</a>
			<a href="">| 友情链接</a>
			<a href="">| 依谷资讯</a>
			<a href="">| 网站地图</a>
			<a href="">| 客服在线</a>
		</div>
		<div class="footer_linkimg">
			<a href=""><img src="../img/common/dzswsfqy.png" alt=""></a>
			<a href=""><img src="../img/common/kxwz.jpg" alt=""></a>
			<a href=""><img src="../img/common/gxyz.jpg" alt=""></a>
			<a href=""><img src="../img/common/govIcon.gif" alt=""></a>
			<a href=""><img src="../img/common/xfwq.jpg" alt=""></a>
			<a href=""><img src="../img/common/zmpp.jpg" alt=""></a>
			<a href=""><img src="../img/common/spltxkz.png" alt=""></a>
		</div>
		<p>Copyright © 2010-2018 所有图片均受著作权保护，未经许可任何单位与个人不得使用、复制、转载、摘编，违者必究法律责任。</p>
		<p><a>粤ICP备11016505号-9 </a>| All Rights Reserved 深圳依谷网版权所有 网络实名：<a>依谷网</a></p>
	</div>
`;
$.extend(CreFooter.prototype,{
	init:function(){
		this.createDom();
	},
	createDom:function(){
		this.content = $("<div></div>").append(CreFooter.Template);
		this.element.append(this.content);
	}
})