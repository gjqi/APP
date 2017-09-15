angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory("mycourse",function(){
	var course=[
		{
			id: 0,
	    face: 'img/1.jpg'
		},
		{
			id: 1,
	    face: 'img/5.jpg'
		}, 
		{
	    id: 2,
	    face: 'img/6.jpg'
	  }, 
	  {
	    id: 3,
	    face: 'img/7.jpg'
	  }, 
	  {
	    id: 4,
	    face: 'img/8.png'
	  },
	  {
	    id: 5,
	    face: 'img/9.jpg'
	  }
	]
	return {
		all: function() {
      return course;
   },
   //传id
   get:function(id){
   	for(var i=0;i<course.length;i++){
   		if(id==course[i].id){
   			return course[i]
   		}
   	}
   }
	}
})
.factory("Recommend",function(){
	var myrecommend=[
		{
			id: 0,
	    face: 'img/抠图/list_01.png',
	    name:'女装'
		},
		{
			id: 1,
	    face: 'img/抠图/list_02.png',
	    name:'母婴'
		}, 
		{
	    id: 2,
	    face: 'img/抠图/list_03.png',
	    name:'美食'
	  }, 
	  {
	    id: 3,
	    face: 'img/抠图/list_04.png',
	    name:'鞋靴'
	  }, 
	  {
	    id: 4,
	    face: 'img/抠图/list_05.png',
	    name:'箱包'
	  },
	  {
	    id: 5,
	    face: 'img/抠图/list_06.png',
	    name:'男装'
	  },
	  {
	    id: 6,
	    face: 'img/抠图/list_07.png',
	    name:'居家'
	  },
	  {
	    id: 7,
	    face: 'img/抠图/list_08.png',
	    name:'内衣'
	  },
	  {
	    id: 8,
	    face: 'img/抠图/list_09.png',
	    name:'美妆'
	  },
	  {
	    id: 9,
	    face: 'img/抠图/list_10.png',
	    name:'数码'
	  }
	]
	return {
		all: function() {
      return myrecommend;
   },
   //传id
   get:function(id){
   	for(var i=0;i<myrecommend.length;i++){
   		if(id==myrecommend[i].id){
   			return myrecommend[i]
   		}
   	}
   }
	}
})
.factory("Productlist",function(){
	var product=[
		{
			id: 0,
	    Cpic: 'img/抠图/2.png',
	    name:'居家百货大全专场',
	    price:"￥0.1",
	    des:"满9.9元包邮",
	    pass:"￥68",
	    secpic:"",
	    purchased:"176567人已购"
		},
		{
			id: 1,
	    Cpic: 'img/抠图/3.png',
	    name:'实用吃水果工具组合8件套',
	    price:"￥9.9",
	    des:"专享价",
	    pass:"￥19.8",
	    secpic:"img/miaos.png",
	    purchased:""
		}, 
		{
	    id: 2,
	    Cpic: 'img/抠图/4.png',
	    name:'韩版毛衣',
	    price:"￥16.9",
	    des:"包邮",
	    pass:"￥698",
	    secpic:"img/miaos.png",
	    purchased:""
	  }, 
	  {
	    id: 3,
	    Cpic: 'img/抠图/5.png',
	    name:'童装童鞋大促专场',
	    price:"￥5.9",
	    des:"专享价",
	    pass:"￥98",
	    secpic:"",
	    purchased:"37166人已购"
	  }, 
	  {
	    id: 4,
	    Cpic: 'img/抠图/6.png',
	    name:'8.23美食大促专场',
	    price:"￥5.9",
	    des:"包邮",
	    pass:"￥99",
	    secpic:"",
	    purchased:"33788人已购"
	  },
	  {
	    id: 5,
	    Cpic: 'img/抠图/7.png',
	    name:'裤装牛仔大促专场',
	    price:"￥9.9",
	    des:"专享价",
	    pass:"￥45",
	    secpic:"",
	    purchased:"33718人已购"
	  },
	  {
	    id: 6,
	    Cpic: 'img/抠图/8.png',
	    name:'纸品家清大促专场',
	    price:"￥5.8",
	    des:"包邮",
	    pass:"￥6",
	    secpic:"",
	    purchased:"8221人已购"
	  },
	  {
	    id: 7,
	    Cpic: 'img/抠图/9.png',
	    name:'护肤面膜大促专场',
	    price:"￥6.9",
	    des:"包邮",
	    pass:"￥169",
	    secpic:"",
	    purchased:"112678人已购"
	  },
	  {
	    id: 8,
	    Cpic: 'img/抠图/10.png',
	    name:'居家家电大促专场',
	    price:"￥6.9",
	    des:"包邮",
	    pass:"￥299",
	    secpic:"",
	    purchased:"1897人已购"
	  },
	  {
	    id: 9,
	    Cpic: 'img/抠图/11.png',
	    name:'秋冬变身白女神',
	    price:"￥19.5",
	    des:"专享价",
	    pass:"￥298",
	    secpic:"",
	    purchased:"3208人已购"
	  },
	  {
	    id: 10,
	    Cpic: 'img/抠图/12.png',
	    name:'8.23内衣大促专场',
	    price:"￥9.9",
	    des:"包邮",
	    pass:"￥79",
	    secpic:"",
	    purchased:"128090人已购"
	  },
	  {
	    id: 11,
	    Cpic: 'img/抠图/13.png',
	    name:'大促专场  居家小百货专场',
	    price:"￥0.1",
	    des:"满9.9包邮",
	    pass:"￥7.9",
	    secpic:"",
	    purchased:"77438人已购"
	  },
	  {
	    id: 12,
	    Cpic: 'img/抠图/15.png',
	    name:'裙装套装大促专场',
	    price:"￥9.9",
	    des:"包邮",
	    pass:"￥18",
	    secpic:"",
	    purchased:"17898人已购"
	  },
	  {
	    id: 13,
	    Cpic: 'img/抠图/16.png',
	    name:'婴童用品综合大促专场',
	    price:"￥9.9",
	    des:"包邮",
	    pass:"￥84",
	    secpic:"",
	    purchased:"98767人已购"
	  },
	  {
	    id: 14,
	    Cpic: 'img/抠图/21.png',
	    name:'男女鞋大促专场',
	    price:"￥9.9",
	    des:"包邮",
	    pass:"￥29",
	    secpic:"",
	    purchased:"10068人已购"
	  }
	]
	return {
		all: function() {
      return product;
   },
   //传id
   get:function(id){
   	for(var i=0;i<product.length;i++){
   		if(id==product[i].id){
   			return product[i]
   		}
   	}
   }
	}
})
.factory("brandGroup",function(){
	var group=[
		{
			id: 0,
	    face: 'img/品牌团/1.png',
	    name:'女装'
		},
		{
			id: 1,
	    face: 'img/品牌团/2.png',
	    name:'美妆'
		}, 
		{
	    id: 2,
	    face: 'img/品牌团/3.png',
	    name:'居家'
	  }, 
	  {
	    id: 3,
	    face: 'img/品牌团/4.png',
	    name:'母婴'
	  }, 
	  {
	    id: 4,
	    face: 'img/品牌团/5.png',
	    name:'内衣'
	  }
	]
	return {
		all: function() {
      return group;
   },
   //传id
   get:function(id){
   	for(var i=0;i<group.length;i++){
   		if(id==group[i].id){
   			return group[i]
   		}
   	}
   }
	}
})
.factory("brandcontent",function(){
	var contents=[
		{
			id: 0,
	    face: 'img/品牌团/a.png',
	    name:"5折起"
		},
		{
			id: 1,
	    face: 'img/品牌团/b.png',
	    name:"美孕嘉"
		}, 
		{
	    id: 2,
	    face: 'img/品牌团/c.png',
	    name:"联合特卖"
	  }, 
	  {
	    id: 3,
	    face: 'img/品牌团/d.png',
	    name:"兰瑟LANSUR"
	  }, 
	  {
	    id: 4,
	    face: 'img/品牌团/e.png',
	    name:"扬子 生活电器专场"
	  }, 
	  {
	    id: 5,
	    face: 'img/品牌团/f.png',
	    name:"格兰仕"
	  }, 
	  {
	    id: 6,
	    face: 'img/品牌团/g.png',
	    name:"七匹狼"
	  }, 
	  {
	    id: 7,
	    face: 'img/品牌团/h.png',
	    name:"资兰 孕妇装专场"
	  }, 
	  {
	    id: 8,
	    face: 'img/品牌团/i.png',
	    name:"沃之沃"
	  }
	]
	return {
		all: function() {
      return contents;
   },
   //传id
   get:function(id){
   	for(var i=0;i<contents.length;i++){
   		if(id==contents[i].id){
   			return contents[i]
   		}
   	}
   }
	}
})
.factory("groom",function(){
	var mygroom=[
		{
			id: 0,
	    face: 'img/我/1.png',
	    name:'果之恋润肤',
	    now:'￥39.9',
	    old:'￥138.00'
		},
		{
			id: 1,
	    face: 'img/我/2.png',
	    name:'丸美正品',
	    now:'￥106.00',
	    old:'￥178.00'
		}, 
		{
	    id: 2,
	    face: 'img/我/3.png',
	    name:'化妆套装',
	    now:'￥36.00',
	    old:'￥88.00'
	  }, 
	  {
	    id: 3,
	    face: 'img/我/4.png',
	    name:'蓝秀保湿隔离霜',
	    now:'￥89.00',
	    old:'￥168.00'
	  }, 
	  {
	    id: 4,
	    face: 'img/我/5.png',
	    name:'碧美妮丝绸睡衣',
	    now:'￥88.00',
	    old:'￥140.00'
	  }, 
	  {
	    id: 5,
	    face: 'img/我/6.png',
	    name:'特产儿童吃食',
	    now:'￥19.9',
	    old:'￥39.9'
	  }, 
	  {
	    id: 6,
	    face: 'img/我/7.png',
	    name:'靓邦素正品',
	    now:'￥25.00',
	    old:'￥68.00'
	  }, 
	  {
	    id: 7,
	    face: 'img/我/8.png',
	    name:'珀莱雅专柜',
	    now:'￥116.00',
	    old:'￥146.00'
	  }
	]
	return {
		all: function() {
      return mygroom;
   },
   //传id
   get:function(id){
   	for(var i=0;i<mygroom.length;i++){
   		if(id==mygroom[i].id){
   			return mygroom[i]
   		}
   	}
   }
	}
})
//引导动画
.factory('locals',function($window){
	return {
		set:function(key,value){
			$window.localStorage[key]=value
		},
		get:function(key,defaultValue){
			return $window.localStorage[key] || defaultValue
		}
	}
})
//帮助与反馈
.factory('helpping',function($window){
	var helpme=[
		{
			id:1,
			name:"购买支付",
			face:[
				{myid:1,main:"如何授权淘宝用户",helpDetails:"柚子街购物需要登录淘宝账户，请您在【我】－【设置】或【更多】中授权淘宝账户，如您没有淘宝账户，请点击此处进行注册。通过进入【我】－【设置】或【更多】页面，若淘宝账号未授权，点击【去授权】登录淘宝账号；若淘宝账号已授权，点击【退出登录】可重新授权新淘宝账号。",time:"2016-01-20 19:41:25"},
				{myid:2,main:"授权显示淘宝账户密码错误",helpDetails:"请核对淘宝账户和密码是否正确，建议登录淘宝网网页尝试，如能正常登录就可重新尝试授权，如无法正常登录建议尝试找回密码或账户，有疑问可咨询淘宝客服热线：4008608608",time:"2016-03-03 11:02:56"},
				{myid:3,main:"支付方式",helpDetails:"支付方式同步淘宝和天猫支付方式。",time:"2016-03-03 10:15:43"},
				{myid:4,main:"修改收货地址",helpDetails:"如果您在购买过程中，想更改地址，可以在【提交订单】界面，点击上方的地址栏，就可进行新增收货地址哦。",time:"2016-01-20 19:41:48"},
				{myid:5,main:"购物车无商品",helpDetails:"请先确认【我】－【设置】或【更多】中授权的淘宝账号，与购买时的淘宝账号是否相同，如果不同，点击【退出】重新登录淘宝账号即可；如果账号相同，请先通过【我】－【设置】或【更多】－【通用】中清除缓存，重新打开商品页面；再检查一下是否存在手机缓存不够的情况，如果还不行您可以在备份好数据的情况下卸载安装，也可试试在其他渠道安装。",time:"2016-03-03 10:54:36"},
				{myid:6,main:"收货地址已满",helpDetails:"柚子街购物的收货地址需要登录淘宝网网页进行删除。",time:"2016-03-03 11:00:05"},
				{myid:7,main:"买家账户存在安全风险",helpDetails:"请登录淘宝网网页，进入我的淘宝进行相应的操作，如有疑问也可以点击右上角的联系客服。",time:"2016-03-03 11:13:49"},
				{myid:8,main:"支付密码错误",helpDetails:"支付宝密码错误或忘记需要登录支付宝网页进行找回，或电话咨询支付宝客服：95188",time:"2016-03-03 11:14:05"}
			]
		},{
			id:2,
			name:"订单物流",
			face:[
				{myid:9,main:"如何查看订单",helpDetails:"通过【我】－【我的订单】即可查询到您购买的商品订单。",time:"2016-03-03 11:14:39"},
				{myid:10,main:"收藏的商品在哪里",helpDetails:"柚子街购物需要授权淘宝账户，收藏的宝贝需要到登录淘宝网进行查看，如果您在柚子街看到喜欢的宝贝可以加入购物车，方便查询。",time:"2016-03-03 11:16:26"},
				{myid:11,main:"如何查看物流",helpDetails:"在卖家发货后才能查看物流信息，您可通过【我】－【我的订单】－【查看物流】中进行查看。",time:"2016-03-03 11:14:55"},
				{myid:12,main:"找不到订单",helpDetails:"请先确认【我】－【设置】或【更多】中授权的淘宝账号，与购买时的淘宝账号是否相同，如果不同，点击【退出】重新登录淘宝账号即可；如果账号相同，可根据支付宝付款记录联系支付宝客服：95188进行查询。",time:"2016-03-03 11:15:34"},
				{myid:13,main:"没有物流信息",helpDetails:"亲，不要着急，没有物流信息可能有以下两种情况：1、卖家填写了物流单号进行发货，在等待快递小哥来取走商品；2、物流公司的物流信息没有及时更新；建议您等待1天，仍未更新物流信息先联系商家沟通处理，若沟通无果请您将订单号反馈给我们客服，我们会协助您处理问题。",time:"2016-03-03 11:15:20"},
				{myid:14,main:"收货地址错误怎么办",helpDetails:"请您及时联系商家客服，点击【我的订单】找到订单以后点击商品可以联系到客服。",time:"2016-03-03 11:15:49"},
				{myid:15,main:"订单不小心删除怎么找回",helpDetails:"您可以登录淘宝网网页找到【已买到的宝贝】，查看订单回收站，可以进行撤回及其他操作。",time:"2016-03-03 11:16:05"}
			]
		},{
			id:3,
			name:"兑换商城",
			face:[
				{myid:16,main:"多久发货",helpDetails:"兑换成功后会在礼品下线后7个工作日内安排寄出的，请您耐心等待一下哦～注：周六日、节假日都不是工作日哦，请您谅解！",time:"2016-03-03 11:16:55"},
				{myid:17,main:"如何修改收货地址",helpDetails:"您选择需要兑换的礼品后，点击【兑换】，然后在【确认兑换】页面上方核对修改地址，请您确保信息准确无误～注：已兑换的地址无法同步更换。",time:"2016-03-03 11:17:14"},
				{myid:18,main:"如何查看订单及物流",helpDetails:"通过【我】—【柚币购】右上角柚币数量进入查看兑换情况，已发货状态则表示货品已寄出，点击查看物流可看到物流详情。",time:"2016-08-23 16:10:13"},
				{myid:19,main:"商品是否需要运费",helpDetails:"兑换礼品不需要支付运费。",time:"2016-03-03 11:17:40"},
				{myid:20,main:"无法兑换",helpDetails:"您可以尝试在备份好数据的情况下卸载安装，若仍无法兑换，请您联系微信公众号【youzijie101】，我们的工作人员会为您妥善处理。",time:"2016-03-03 11:17:54"}
			]
		},{
			id:4,
			name:"售后",
			face:[
				{myid:21,main:"联系我们",helpDetails:"如有问题请以邮件的方式联系我们！客服邮箱：meiyouservice@xiaoyouzi.com",time:"2016-03-03 11:19:12"},
				{myid:22,main:"如何申请淘宝客服介入",helpDetails:"通过【我】—【我的订单】—找到对应的退款订单—点击【退款被拒绝】—【要求淘宝介入】，如果您按照以上操作申请了【要求淘宝介入处理】后，系统会给予您和卖家3天的举证期，举证完成后由淘宝进行凭证审核。（如果需要买家举证，在完成举证后会给予卖家24小时进行处理，仍无法解决的将由淘宝进行凭证审核）。从凭证审核开始，淘宝一般会在4-6个工作日（不包含周末、节假日）给出处理意见，请及时关注页面及旺旺的变化，如有新情况反馈可在页面进行留言。",time:"2016-03-03 11:18:37"},
				{myid:23,main:"如何申请售后",helpDetails:"在交易成功的15天内，可以通过【我】—【我的订单】找到对应的订单，点击【申请售后】；如果交易已经过了15天，优先联系卖家协商处理，如无法协商处理，建议您提供有效的凭证电话联系淘宝客服重新开通售后通道。",time:"2016-03-03 11:18:54"},
				{myid:24,main:"商品质量问题",helpDetails:"为保障您自身的利益，贵重物品、电器、易碎物品等应当快递小哥的面验收，如有不符或破损可拒签，及时联系卖家告知情况并协商处理办法。如果已经签收，请将商品问题的照片保存好，联系卖家沟通处理办法。若沟通无果请您将订单号反馈给我们客服，我们会协助您处理问题。",time:"2016-03-03 11:18:24"}
			]
		}
	]
	return {
		all: function() {
      return helpme;
   },
   //传id
   get:function(id){
   	for(var i=0;i<helpme.length;i++){
   		if(id==helpme[i].id){
   			return helpme[i]
   		}
   	}
   }
	}
})
//居家页的数据
.factory("livingHome",function(){
	var myhome=[
		{
			id: 0,
	    face: 'img/柚子街/jj_02.png',
	    describe:"生活家电"
		},
		{
			id: 1,
	    face: 'img/柚子街/jj_03.png',
	    describe:"床上用品"
		}, 
		{
	    id: 2,
	    face: 'img/柚子街/jj_04.png',
	    describe:"纸品家清"
	  }, 
	  {
	    id: 3,
	    face: 'img/柚子街/jj_05.png',
	    describe:"厨房餐饮"
	  }, 
	  {
	    id: 4,
	    face: 'img/柚子街/jj_06.png',
	    describe:"布艺家饰"
	  },
	  {
	    id: 5,
	    face: 'img/柚子街/jj_07.png',
	    describe:"整理收纳"
	  },
	  {
	    id: 6,
	    face: 'img/柚子街/jj_08.png',
	    describe:"日用百货"
	  },
	  {
	    id: 7,
	    face: 'img/柚子街/jj_09.png',
	    describe:"绿植宠物"
	  }
	]
	return {
		all: function() {
      return myhome;
   },
   //传id
   get:function(id){
   	for(var i=0;i<myhome.length;i++){
   		if(id==myhome[i].id){
   			return myhome[i]
   		}
   	}
   }
	}
})
//分类的数据---左边
.factory("classifys",function(){
	var myclass={
		"服饰内衣":false,
		"居家用品":false,
		"母婴用品":false,
		"鞋包配饰":false,
		"美妆护肤":false,
		"3C数码":false,
		"运动户外":false,
		"美食保健":false,
		"图书文字":false,
		"男士精品":false
	}
	return {
		all: function() {
      return myclass;
  },
  //传id
   get:function(id){
   	for(var i=0;i<left.myclass;i++){
   		if(id==myclass[i].id){
   			return myclass[i]
   		}
   	}
   }
	}
})
//分类页面右边数据
.factory("classRight",function(){
	var myright=[
		{
			id: 0,
			name:"服饰内衣",
	    first: 'img/分类/fl_01.png',
	    main:[
	    	{Did:1,imgs:"img/分类/ny_01.png",des:"精选套装"},
	    	{Did:2,imgs:"img/分类/ny_02.png",des:"T恤卫衣"},
	    	{Did:3,imgs:"img/分类/ny_03.png",des:"连衣裙"},
	    	{Did:4,imgs:"img/分类/ny_04.png",des:"大码女装"}
	    ],
	    last:'img/分类/fl_02.png'
		},{
			id: 1,
			name:"居家用品",
	    first: 'img/分类/fl_03.png',
	    main:[
	    	{Did:5,imgs:"img/分类/rc_01.png",des:"生活家电"},
	    	{Did:6,imgs:"img/分类/rc_02.png",des:"床上用品"},
	    	{Did:7,imgs:"img/分类/rc_03.png",des:"纸品家清"},
	    	{Did:8,imgs:"img/分类/rc_04.png",des:"厨房餐饮"},
	    	{Did:9,imgs:"img/分类/rc_05.png",des:"布艺家饰"}
	    ],
	    last:''
		},{
			id: 2,
			name:"母婴用品",
	    first: 'img/分类/fl_04.png',
	    main:[
	    	{Did:10,imgs:"img/分类/my_01.png",des:"儿童套装"},
	    	{Did:11,imgs:"img/分类/my_02.png",des:"打底上衣"},
	    	{Did:12,imgs:"img/分类/my_03.png",des:"儿童外套"},
	    	{Did:13,imgs:"img/分类/my_04.png",des:"裙装裤装"},
	    	{Did:14,imgs:"img/分类/my_05.png",des:"内衣裤袜"},
	    	{Did:15,imgs:"img/分类/my_06.png",des:"孕妈用品"}
	    ],
	    last:''
		},{
			id: 3,
			name:"鞋包配饰",
	    first: 'img/分类/fl_05.png',
	    main:[
	    	{Did:16,imgs:"img/分类/xb_01.png",des:"休闲运动"},
	    	{Did:17,imgs:"img/分类/xb_02.png",des:"单鞋"},
	    	{Did:18,imgs:"img/分类/xb_03.png",des:"靴子"},
	    	{Did:19,imgs:"img/分类/xb_04.png",des:"旅行箱包"},
	    	{Did:20,imgs:"img/分类/xb_05.png",des:"单肩包"},
	    	{Did:21,imgs:"img/分类/xb_06.png",des:"首饰"},
	    	{Did:22,imgs:"img/分类/xb_07.png",des:"帽子冰袖"},
	    	{Did:23,imgs:"img/分类/xb_08.png",des:"手表墨镜"}
	    ],
	    last:'img/分类/fl_06.png'
		},{
			id: 4,
			name:"美妆护肤",
	    first: '',
	    main:[
	    	{Did:24,imgs:"img/分类/mz_01.png",des:"护肤"},
	    	{Did:25,imgs:"img/分类/mz_02.png",des:"彩妆"},
	    	{Did:26,imgs:"img/分类/mz_03.png",des:"面膜"},
	    	{Did:27,imgs:"img/分类/mz_04.png",des:"个护"}
	    ],
	    last:''
		},{
			id: 5,
			name:"3C数码",
	    first: 'img/分类/fl_07.png',
	    main:[
	    	{Did:28,imgs:"img/分类/3c_01.png",des:"智能娱乐"},
	    	{Did:29,imgs:"img/分类/3c_02.png",des:"手机电脑"}
	    ],
	    last:''
		},{
			id: 6,
			name:"运动户外",
	    first: '',
	    main:[
	    	{Did:28,imgs:"img/分类/yd_01.png",des:"运动服饰"},
	    	{Did:29,imgs:"img/分类/yd_02.png",des:"户外用品"}
	    ],
	    last:''
		},{
			id: 7,
			name:"美食保健",
	    first: 'img/分类/fl_09.png',
	    main:[
	    	{Did:30,imgs:"img/分类/ms_01.png",des:"饼干糕点"},
	    	{Did:31,imgs:"img/分类/ms_02.png",des:"生鲜水果"},
	    	{Did:32,imgs:"img/分类/ms_03.png",des:"坚果豆类"},
	    	{Did:33,imgs:"img/分类/ms_04.png",des:"膨化零食"},
	    	{Did:34,imgs:"img/分类/ms_05.png",des:"酒饮冲调"}
	    ],
	    last:'img/分类/fl_10.png'
		},{
			id: 8,
			name:"图书文字",
	    first: 'img/分类/fl_08.png',
	    main:[
	    	{Did:35,imgs:"img/分类/ts_01.png",des:"学生用品"},
	    	{Did:36,imgs:"img/分类/ts_02.png",des:"儿童读物"},
	    	{Did:37,imgs:"img/分类/ts_03.png",des:"绘画用品"},
	    	{Did:38,imgs:"img/分类/ts_04.png",des:"书写工具"}
	    ],
	    last:''
		},{
			id: 9,
			name:"男士精品",
	    first: '',
	    main:[
	    	{Did:39,imgs:"img/分类/ns_01.png",des:"男士上衣"},
	    	{Did:40,imgs:"img/分类/ns_02.png",des:"爸爸装"},
	    	{Did:41,imgs:"img/分类/ns_03.png",des:"男士箱包"},
	    	{Did:42,imgs:"img/分类/ns_04.png",des:"男士袜子"}
	    ],
	    last:''
		}
	]
	return {
		all: function() {
      return myright;
   },
   //传id
   get:function(id){
   	for(var i=0;i<myright.length;i++){
   		if(id==myright[i].id){
   			return myright[i]
   		}
   	}
   }
	}
})
//搜索---热门搜索
.factory("hotSearch",function(){
	var myhot=[
		{
			id: 0,
	    describe:"手机壳"
		},{
			id: 1,
	    describe:"睡衣"
		},{
			id: 2,
	    describe:"小白鞋"
		},{
			id: 3,
	    describe:"水杯"
		},{
			id: 4,
	    describe:"耳环"
		},{
			id: 5,
	    describe:"书包"
		},{
			id: 6,
	    describe:"拖鞋"
		},{
			id: 7,
	    describe:"玩具"
		},{
			id: 8,
	    describe:"拉杆箱"
		},{
			id: 9,
	    describe:"秋装"
		}
	]
	return {
		all: function() {
      return myhot;
   },
   //传id
   get:function(id){
   	for(var i=0;i<myhot.length;i++){
   		if(id==myhot[i].id){
   			return myhot[i]
   		}
   	}
   }
	}
})
//历史记录
.factory('history',function($window){
	return {
		set:function(key,value){
			$window.localStorage.setItem(key,value)
		},
		get:function(key,defaultValue){
			return $window.localStorage.getItem(key) || defaultValue
		},
		remove:function(key){
			return $window.localStorage.removeItem(key)
		}
	}
})
