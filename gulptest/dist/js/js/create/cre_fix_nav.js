"use strict";function Crefixnav(t){this.element=t,this.init()}Crefixnav.Template='\n<div id="right_w">\n\t    <div class="right_fix">\n\t        <div class="toolbar2">\n\t            <div class="toolbar2_cen bor">\n\t             \t<a href=""> <i class="iconfont icon-cart_light"></i><span>购</span><span>物</span><span>车</span><span class = "n">(0)</span></a>\n\t            </div>\n\t            <div class="toolbar2_cen">\n\t                <div class="toolbar_img tool_hover">\n\t                \t<img src="http://www.tssgsc.com/images/shop_online2016/user_icon.png" alt="">\n\t                </div>\n\t                <div class="toolbar_text">\n\t                    <a href="##">我的资料</a>\n\t                    <div class="angle"></div>\n\t                </div>\n\t            </div>\n\t            <div class="toolbar2_cen">\n\t                 <div class="toolbar_img tool_hover">\n\t                 \t<i class="iconfont icon-footprint"></i>\n\t                </div>\n\t                <div class="toolbar_text">\n\t                    <a href="##">我的足迹</a>\n\t                    <div class="angle"></div>\n\t                </div>\n\t            </div>\n\t            <div class="toolbar2_cen">\n\t             \t<div class="toolbar_img tool_hover">\n\t             \t\t<i class = "iconfont icon-favor_light"></i>\n\t                </div>\n\t                <div class="toolbar_text">\n\t                    <a href="##">我的收藏</a>\n\t                    <div class="angle"></div>\n\t                </div>\n\t            </div>\n\t            <div class="toolbar2_cen">\n\t             \t<div class="toolbar_img tool_hover">\n\t                \t<img src="http://www.tssgsc.com/images/shop_online2016/edit_icon.png" alt="">\n\t                </div>\n\t                <div class="toolbar_text">\n\t                    <a href="##">我要留言</a>\n\t                    <div class="angle"></div>\n\t                </div>\n\t            </div>\n\n\t        </div>\n\t        <div class="toolbar3">\n\t            <div class="toolbar2_cen">\n\t                 <div class="toolbar_img tool_hover">\n\t                \t<img src="http://www.tssgsc.com/images/shop_online2016/return_top.png" alt="">\n\t                </div>\n\t                <div class="toolbar_text">\n\t                    <a href="##">回到顶部</a>\n\t                    <div class="angle"></div>\n\t                </div>\n\t            </div>  \n\t        </div>\n\t    </div>\n\t</div>\n',$.extend(Crefixnav.prototype,{init:function(){this.createDom()},createDom:function(){this.content=$("<div></div>").append(Crefixnav.Template),this.element.append(this.content)}});