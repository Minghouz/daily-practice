function CreHeader(ele) {
	this.content = ele;
	this.init();
}
CreHeader.Template = `
	<div id="header_logo1" class="wrap">
		<h1><a href="#" title="首页">特色水果</a></h1>
		<form action="">
			<input type="text" placeholder="新西兰奇异果"><span class="search">搜索</span>
		</form>
		<div>
			<a href="list.html">立即去结算</a>
		</div>
	</div>
	<div id="header_top" class="wrap">
		<div>
			<a href="">欢迎光临依谷网</a>
			<a href="">收藏依谷网</a>
		</div>
		<div>
			<a href="../html/login.html">登录</a>
			<a href="../html/register.html">免费注册</a>
			<a href="#">购物车</a>
			<a href="#">关注依谷网</a>
		</div>
	</div>
	<div id="header_logo" class="wrap">
		<h1><a href="#" title="首页">特色水果</a></h1>
		<form action="">
			<input type="text" placeholder="新西兰奇异果"><span class="search">搜索</span>
		</form>
		<div>
			<a href="list.html">立即去结算</a>
		</div>
	</div>
	<div id="nav" class="wrap">
		<ul class="ul">
			<li id="sec_nav"><em class= "size20">
				全部商品分类<span class = "angle"></span></em>
				<div class="menu">
					<div class="item">		
							<a href="" class="h4">
								<img src="../images/3090700_1501524025.png" class="fl" alt=""><span href="" class="fl">国产水果</span>
							</a>
						<div class="item_box">
							<dl>
								<dt>国产水果</dt>
								<dd>
									<span><a href="##">苹果</a></span>
									<span><a href="##">香梨</a></span>
									<span><a href="##">柑桔</a></span>
									<span><a href="##">火龙果</a></span>
								</dd>
							</dl>
						</div>	
					</div>
					<div class="item">	
							<a href="" class="h4">
								<img src="../images/3090701_1501524038.png" class="fl" alt=""><span href="" class="fl">进口水果</span>
							</a>	
						<div class="item_box">
							<dl>
								<dt>国产水果</dt>
								<dd>
									<span><a href="">车厘子</a></span>
									<span><a href="">奇异果</a></span>
									<span><a href="">榴莲</a></span>
								</dd>
							</dl>
						</div>	
					</div>
					<div class="item">
							<a href="" class="h4">
								<img src="../images/3090702_1501524053.png" class="fl" alt=""><span href="" class="fl">水果饮品</span>
							</a>	
						<div class="item_box">
							<dl>
								<dt>国产水果</dt>
								<dd>
									<span><a href="">苹果汁</a></span>
									<span><a href="">芒果汁</a></span>
									<span><a href="">香橙汁</a></span>
								</dd>
							</dl>
						</div>
					</div>
					<div class="item">
							<a href="" class="h4">
								<img src="../images/3090703_1501524070.png" class="fl" alt=""><span href="" class="fl">果肉制品</span>
							</a>				
						<div class="item_box">
							<dl>
								<dt>国产水果</dt>
								<dd>
									<span><a href="">果酱</a></span>
									<span><a href="">椰肉酱</a></span>
									<span><a href="">果肉酱</a></span>
								</dd>
							</dl>
						</div>
					</div>
					<div class="item">		
							<a href="" class="h4">
								<img src="../images/3090704_1501524086.png" class="fl" alt=""><span href="" class="fl">礼盒包装</span>
							</a>		
						<div class="item_box">
							<dl>
								<dt>国产水果</dt>
								<dd>
									<span><a href="">鲜果礼盒</a></span>
									<span><a href="">进口</a></span>
								</dd>
							</dl>
						</div>		
					</div>
					<div class="item">
							<a href="" class="h4">
								<img src="../images/3090706_1501524102.png" class="fl" alt=""><span href="" class="fl">有机肥料</span>
							</a>	
						<div class="item_box">
							<dl>
								<dt>国产水果</dt>
								<dd>
									<span><a href="">果树肥料</a></span>
								</dd>
							</dl>
						</div>
					</div>
					<div class="item close_menu">
						<img src="../img/common/menu_arrow_top.png" alt="">					
					</div>
				</div>
			</li>
			<li><a href="../index.html">首页</a></li>
			<li><a href="">礼品卡券</a></li>
			<li><a href="">安心宅配</a></li>
			<li><a href="">产地特色预定</a></li>
			<li><a href="">企业定制</a></li>
			<li><a href="">活动专区</a></li>
			<li><a href="">时尚资讯</a></li>
			<li><a href="">依谷扶贫</a></li>
		</ul>
	</div>
`;
$.extend(CreHeader.prototype,{
	init:function(){
		this.createDom();
	},
	createDom:function(){
		this.element = $("<div></div>").append(CreHeader.Template);
		this.content.append(this.element);
	}
})