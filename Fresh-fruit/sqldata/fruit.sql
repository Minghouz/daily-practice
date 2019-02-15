-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 05 月 15 日 06:10
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `fruit`
--

-- --------------------------------------------------------

--
-- 表的结构 `domestic`
--

CREATE TABLE IF NOT EXISTS `domestic` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `info` text NOT NULL,
  `price` float NOT NULL,
  `intro` text NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `domestic`
--

INSERT INTO `domestic` (`fid`, `img`, `info`, `price`, `intro`) VALUES
(1, 'http://aimg8.dlszyht.net.cn/product/800_1500/1524247/84/166815_1503282131.png', '四川不知火丑柑 粑粑柑5斤约220g/个', 59, '["http://www.xianguozhijia.com/images/upload/Image/01(103).jpg","http://www.xianguozhijia.com/images/upload/Image/02(98).jpg","http://www.xianguozhijia.com/images/upload/Image/03(91).jpg","http://www.xianguozhijia.com/images/upload/Image/04(93).jpg","http://www.xianguozhijia.com/images/upload/Image/05(88).jpg","http://www.xianguozhijia.com/images/upload/Image/051(1).jpg","http://www.xianguozhijia.com/images/upload/Image/06(78).jpg","http://www.xianguozhijia.com/images/upload/Image/07(63).jpg","http://www.xianguozhijia.com/images/upload/Image/08(39).jpg"]'),
(2, 'http://aimg8.dlszyht.net.cn/product/800_1500/1524247/84/166787_1503282046.png', '重庆万州血橙5斤装 约130g/个', 59, '["http://www.xianguozhijia.com/images/upload/Image/01(105).jpg","http://www.xianguozhijia.com/images/upload/Image/02(100).jpg","http://www.xianguozhijia.com/images/upload/Image/03(93).jpg","http://www.xianguozhijia.com/images/upload/Image/04(95).jpg","http://www.xianguozhijia.com/images/upload/Image/05(90).jpg"]');

-- --------------------------------------------------------

--
-- 表的结构 `drink`
--

CREATE TABLE IF NOT EXISTS `drink` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `info` text NOT NULL,
  `price` float NOT NULL,
  `intro` int(255) NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='水果饮品' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `fruitdata`
--

CREATE TABLE IF NOT EXISTS `fruitdata` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `info` text NOT NULL,
  `price` int(20) NOT NULL,
  `intro` text NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=27 ;

--
-- 转存表中的数据 `fruitdata`
--

INSERT INTO `fruitdata` (`fid`, `img`, `info`, `price`, `intro`) VALUES
(1, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/167061_1503283454.png', '阖家欢乐水果礼盒包装', 198, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283441388789.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283442746999.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283443696769.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283443616050.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283444864920.jpg"]'),
(2, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/167041_1503283358.png', 'Limobar新品苹果浓缩糖原浆果汁苏打汽水气泡碳酸饮料', 60, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283376509139.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283377278750.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283378212413.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283379787584.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283380633326.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283380708084.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283381884613.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283382830961.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283383754827.jpg"]'),
(3, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/167025_1503283289.png', '12瓶装山西特产吕梁野山坡沙棘汁饮料300ml野生果汁饮料整箱', 72, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283309765758.jpg"]'),
(4, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166653_1503281460.png', '陕西精品红富士苹果2.5kg果径80-85mm', 60, '["http://www.xianguozhijia.com/images/upload/Image/513691849110101891_880x303.jpg","http://www.xianguozhijia.com/images/upload/Image/513691849110134659_880x542.jpg","http://www.xianguozhijia.com/images/upload/Image/513691849110167427_880x679.jpg","http://www.xianguozhijia.com/images/upload/Image/513691849110200195_880x471.jpg","http://www.xianguozhijia.com/images/upload/Image/513691849110232963_880x263.jpg","http://www.xianguozhijia.com/images/upload/Image/513691849110265731_880x485.jpg","http://www.xianguozhijia.com/images/upload/Image/513691849110298499_880x540.jpg"]'),
(5, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166623_1503281299.png', '泰国金枕头榴莲 1个装(5斤左右)', 198, '["http://gd2.alicdn.com/imgextra/i2/2023779100/TB2Z3TzaVXXXXcSXXXXXXXXXXXX_%21%212023779100.jpg","http://gd4.alicdn.com/imgextra/i4/2023779100/TB2EFPAaVXXXXcTXXXXXXXXXXXX_%21%212023779100.jpg","http://gd3.alicdn.com/imgextra/i3/2023779100/TB25_jyaVXXXXXPXpXXXXXXXXXX_%21%212023779100.jpg","http://gd2.alicdn.com/imgextra/i2/2023779100/TB2xqfBaVXXXXa3XXXXXXXXXXXX_%21%212023779100.jpg","http://gd1.alicdn.com/imgextra/i1/2023779100/TB2UfYwaVXXXXaFXpXXXXXXXXXX_%21%212023779100.jpg","http://gd3.alicdn.com/imgextra/i3/2023779100/TB2.jvAaVXXXXbVXXXXXXXXXXXX_%21%212023779100.jpg","http://gd4.alicdn.com/imgextra/i4/2023779100/TB2512waVXXXXaNXpXXXXXXXXXX_%21%212023779100.jpg","http://gd4.alicdn.com/imgextra/i4/2023779100/TB28OryaVXXXXXUXpXXXXXXXXXX_%21%212023779100.jpg","http://gd4.alicdn.com/imgextra/i4/2023779100/TB2p.TAaVXXXXbnXXXXXXXXXXXX_%21%212023779100.jpg"]'),
(6, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166696_1503281626.png', '新疆阿克苏冰糖心苹果 阿克苏苹果8斤装', 99, '["http://cdn.fruitday.com/up_images/1416801502.jpg","http://cdn.fruitday.com/up_images/1416801513.jpg","http://cdn.fruitday.com/up_images/1416801561.jpg","http://cdn.fruitday.com/up_images/1416801583.jpg","http://cdn.fruitday.com/up_images/1416801598.jpg","http://cdn.fruitday.com/up_images/1416801609.jpg"]'),
(7, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166735_1503281849.png', '河北泊头特产皇冠梨5斤装 200g~300g/个 产地直发', 49, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281867602271.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281869194554.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281869194554.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281872622997.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281875858088.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281879652140.jpg"]'),
(8, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166939_1503282837.png', '冰糖雪梨汁包邮冰糖炖梨果汁冰糖炖雪梨果粒15*100ml送1瓶', 72, '["https://img.alicdn.com/imgextra/i1/1128271076/TB28Iz1drBnpuFjSZFGXXX51pXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i1/1128271076/TB2u_kcdxhmpuFjSZFyXXcLdFXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i3/1128271076/TB2dCk5cR0kpuFjy1XaXXaFkVXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i1/1128271076/TB23QUgdrxmpuFjSZJiXXXauVXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i1/1128271076/TB2VqBhc3xlpuFjy0FoXXa.lXXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i2/1128271076/TB2JCo6cH8kpuFjy0FcXXaUhpXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i3/1128271076/TB2wFQbdEdnpuFjSZPhXXbChpXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i2/1128271076/TB2.zf0dC4mpuFjSZFOXXaUqpXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i3/1128271076/TB29EkqdyBnpuFjSZFzXXaSrpXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i2/1128271076/TB2sAkXdylnpuFjSZFgXXbi7FXa_!!1128271076.jpg"]'),
(9, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166972_1503283028.png', '广禧草莓果酱2kg含果肉果粒酱刨冰炒酸奶圣代沙冰烘焙奶茶原料', 30, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283051155117.jpg"]'),
(10, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166696_1503281626.png', '新疆阿克苏冰糖心苹果 阿克苏苹果8斤装', 99, '["http://cdn.fruitday.com/up_images/1416801502.jpg","http://cdn.fruitday.com/up_images/1416801513.jpg","http://cdn.fruitday.com/up_images/1416801561.jpg","http://cdn.fruitday.com/up_images/1416801583.jpg","http://cdn.fruitday.com/up_images/1416801598.jpg","http://cdn.fruitday.com/up_images/1416801609.jpg"]'),
(11, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166722_1503281766.png', '优选新疆库尔勒香梨2kg 120g以上/个', 58, '["http://www.xianguozhijia.com/images/upload/Image/01(132).jpg","http://www.xianguozhijia.com/images/upload/Image/02(124).jpg","http://www.xianguozhijia.com/images/upload/Image/03(116).jpg","http://www.xianguozhijia.com/images/upload/Image/05(113).jpg","http://www.xianguozhijia.com/images/upload/Image/06(98).jpg","http://www.xianguozhijia.com/images/upload/Image/07(80).jpg","http://www.xianguozhijia.com/images/upload/Image/08(50).jpg","http://www.xianguozhijia.com/images/upload/Image/09(34).jpg"]'),
(12, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166765_1503281982.png', '海南小青柠2斤 小青柠檬', 49, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281979584970.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281983652620.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281987251154.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503281993836897.jpg"]'),
(13, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166677_1503281559.png', '新疆阿克苏冰糖心苹果2kg果径80-85mm', 59, '["http://www.xianguozhijia.com/images/upload/Image/02(69).jpg","http://www.xianguozhijia.com/images/upload/Image/03(63).jpg","http://www.xianguozhijia.com/images/upload/Image/04(65).jpg","http://www.xianguozhijia.com/images/upload/Image/05(59).jpg","http://www.xianguozhijia.com/images/upload/Image/06(52).jpg","http://www.xianguozhijia.com/images/upload/Image/07(41).jpg","http://www.xianguozhijia.com/images/upload/Image/08(26).jpg"]'),
(14, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166499_1503280627.png', '智利金车厘子 智利莱尼尔樱桃2kg新鲜进口水果', 498, '["http://www.xianguozhijia.com/images/upload/Image/02(58).jpg","http://www.xianguozhijia.com/images/upload/Image/03(54).jpg","http://www.xianguozhijia.com/images/upload/Image/04(53).jpg","http://www.xianguozhijia.com/images/upload/Image/05(48).jpg","http://www.xianguozhijia.com/images/upload/Image/06(41).jpg","http://www.xianguozhijia.com/images/upload/Image/07(32).jpg","http://www.xianguozhijia.com/images/upload/Image/08(21).jpg","http://www.xianguozhijia.com/images/upload/Image/09(19).jpg","http://www.xianguozhijia.com/images/upload/Image/10(12).jpg","http://www.xianguozhijia.com/images/upload/Image/11(9).jpg"]'),
(15, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166552_1503280922.png', '进口越南青芒5斤', 59, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280938847657.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280939251845.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280940778240.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280943916306.jpg"]'),
(16, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166450_1503280403.png', '新西兰佳沛绿奇异果16粒(单个约105g左右)礼盒', 139, '["http://d6.yihaodianimg.com/N07/M0B/C5/53/CgQI0FQ5B-eAHa-fAAH-0wYIYqQ49600.jpg","http://d6.yihaodianimg.com/N07/M00/C5/35/CgQIz1Q5B-uAdGFyAAGh4DH-Fck07100.jpg","http://d6.yihaodianimg.com/V00/M04/7F/53/CgQDsVQ5B--AHa_FAAHZ3E4uBPQ88200.jpg","http://d6.yihaodianimg.com/N05/M04/29/91/CgQI0lQ5B_uAbsNtAAITjieaz8s79300.jpg","http://d6.yihaodianimg.com/N07/M09/C5/35/CgQIz1Q5CASAJ1DeAAGzKBJaNNg77700.jpg","http://d6.yihaodianimg.com/N07/M02/C5/35/CgQIz1Q5CAmAJiHRAADvbVrAGPM19200.jpg","http://d6.yihaodianimg.com/V00/M09/7F/65/CgQDsFQ5CBCAWam9AAFgQf1GnF499300.jpg","http://d6.yihaodianimg.com/N07/M04/C5/54/CgQI0FQ5CBKAKHQvAADrlesUv_Q39900.jpg","http://d6.yihaodianimg.com/V00/M02/7F/55/CgQDsVQ5CBaAORdSAAEkea7_mCQ97500.jpg","http://d6.yihaodianimg.com/N07/M04/C5/54/CgQI0FQ5CBiACTh3AAE3rzvqDFs79200.jpg","http://d6.yihaodianimg.com/N04/M03/DC/C2/CgQDr1N53LKASX0cAAJXUFejk0g32300.jpg","http://d6.yihaodianimg.com/N04/M05/DC/81/CgQDrVN53LaAAmEfAAGc4-n-cJw94500.jpg"]'),
(17, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166437_1503280320.png', '佳沛新西兰鸭嘴金奇异果8粒 进口黄肉猕猴桃', 96, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280315528849.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280315277465.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280316238586.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280316681047.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280316868679.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280317353111.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280317565064.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280317305542.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280318975030.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280318473883.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280318276336.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280319832525.jpg"]'),
(18, 'http://aimg8.dlszyht.net.cn/product/800_1500/1524247/84/166542_1503280861.png', '台湾正宗水仙芒礼盒箱装5-10个 5斤装', 108, '["http://www.xianguozhijia.com/images/upload/Image/001.png","http://www.xianguozhijia.com/images/upload/Image/002.png","http://www.xianguozhijia.com/images/upload/Image/003(2).jpg","http://www.xianguozhijia.com/images/upload/Image/004(2).jpg","http://www.xianguozhijia.com/images/upload/Image/005(4).jpg","http://www.xianguozhijia.com/images/upload/Image/006(2).jpg"]'),
(19, 'http://aimg8.dlszyht.net.cn/product/800_1500/1524247/84/166518_1503280726.png', '智利莱尼尔樱桃车厘子2kg果径约30mm', 488, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280721501061.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280727198281.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280730325429.jpg"]'),
(20, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/167041_1503283358.png', 'Limobar新品苹果浓缩糖原浆果汁苏打汽水气泡碳酸饮料', 60, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283376509139.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283377278750.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283378212413.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283379787584.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283380633326.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283380708084.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283381884613.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283382830961.jpg","http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283383754827.jpg"]'),
(21, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/167025_1503283289.png', '12瓶装山西特产吕梁野山坡沙棘汁饮料300ml野生果汁饮料整箱', 72, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283309765758.jpg"]'),
(22, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166998_1503283184.png', '整箱包邮中粮精选悦活U格350ml广西芒果口味乳酸菌果汁饮料15瓶装', 60, '["http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503283207449414.jpg"]'),
(23, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166959_1503282936.png', '百香果酱广西新鲜百香果果酱非糖桂花酱百香果原浆果肉果汁480g', 31, '["https://img.alicdn.com/imgextra/i4/361863239/TB2KQsBiB0kpuFjy1zdXXXuUVXa_!!361863239.jpg","https://img.alicdn.com/imgextra/i2/361863239/TB26rVoiMxlpuFjy0FoXXa.lXXa_!!361863239.jpg","https://img.alicdn.com/imgextra/i4/361863239/TB2PqoIiB4lpuFjy1zjXXcAKpXa_!!361863239.jpg","https://img.alicdn.com/imgextra/i1/361863239/TB2feRpe_cCL1FjSZFPXXXZgpXa_!!361863239.jpg","https://img.alicdn.com/imgextra/i2/361863239/TB2CyuGkctnpuFjSZFvXXbcTpXa_!!361863239.jpg","https://img.alicdn.com/imgextra/i3/361863239/TB2JtwTiB8lpuFjSspaXXXJKpXa_!!361863239.jpg","https://img.alicdn.com/imgextra/i1/361863239/TB2t.CEkdRopuFjSZFtXXcanpXa_!!361863239.jpg","https://img.alicdn.com/imgextra/i1/361863239/TB2NowtixXlpuFjSsphXXbJOXXa_!!361863239.jpg"]'),
(24, 'http://aimg8.dlszyht.net.cn/product/600_600/1524247/84/166939_1503282837.png', '冰糖雪梨汁包邮冰糖炖梨果汁冰糖炖雪梨果粒15*100ml送1瓶', 72, '["https://img.alicdn.com/imgextra/i1/1128271076/TB28Iz1drBnpuFjSZFGXXX51pXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i1/1128271076/TB2u_kcdxhmpuFjSZFyXXcLdFXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i3/1128271076/TB2dCk5cR0kpuFjy1XaXXaFkVXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i1/1128271076/TB23QUgdrxmpuFjSZJiXXXauVXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i1/1128271076/TB2VqBhc3xlpuFjy0FoXXa.lXXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i2/1128271076/TB2JCo6cH8kpuFjy0FcXXaUhpXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i3/1128271076/TB2wFQbdEdnpuFjSZPhXXbChpXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i2/1128271076/TB2.zf0dC4mpuFjSZFOXXaUqpXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i3/1128271076/TB29EkqdyBnpuFjSZFzXXaSrpXa_!!1128271076.jpg","https://img.alicdn.com/imgextra/i2/1128271076/TB2sAkXdylnpuFjSZFgXXbi7FXa_!!1128271076.jpg"]');

-- --------------------------------------------------------

--
-- 表的结构 `import`
--

CREATE TABLE IF NOT EXISTS `import` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `info` text NOT NULL,
  `price` float NOT NULL,
  `intro` text NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='进口水果' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `tel` int(11) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `tel`) VALUES
('杨诺', '111', '', 0),
('莫子', '222', '', 0),
('风铃', '333', '', 0),
('赵昭', '555', '', 0),
('', '', '', 0),
('111', '111', '111@qq.com', 2147483647),
('21432', '231214', '3214', 4321421),
('1234', '1234qwe', '123@qq.com', 2147483647);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
