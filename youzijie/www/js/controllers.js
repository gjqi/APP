angular.module('starter.controllers', [])
//今日上新
.controller('todayNewCtrl', function($scope,mycourse,$rootScope,Recommend,Productlist,locals,$timeout,livingHome) {
	$timeout(function(){
		var mySwiper2 = new Swiper('#swiper-container2',{
watchSlidesProgress : true,
watchSlidesVisibility : true,
grabCursor : true,
slidesPerView : 5,//可见的数量
//点击事件
onTap: function(){
			//把mySwiper3跳转到对应点击下标
			mySwiper3.slideTo( mySwiper2.clickedIndex)
	}
	
})
//
var mySwiper3 = new Swiper('#swiper-container3',{
//滑动开始的时候触发
onSlideChangeStart: function(){
			updateNavPosition()
	},
onSlideChangeEnd:function(){
	$('.swiper-slide').scrollTop(0)
		
	}

})

function updateNavPosition(){
	//设置swiper2的激活样式
		$('#swiper-container2 .active-nav').removeClass('active-nav')
								//设置当前mySwiper3的激活下标
		var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');

		console.log(activeNav)
		//假如当前有激活样式的元素没有可见
	
	
				//滚动到当前有激活样式的下标
				mySwiper2.slideTo(activeNav.index()-2)
			
	
	}
	//是否加载引导动画
	if(!(locals.get("isload")=="已加载")){
		window.location="#/tab/guide"
	}
	//轮播数据
	$scope.bannerData=mycourse.all()
	$scope.recommends=Recommend.all()
	$scope.recommendlist=[
	[$scope.recommends[0],$scope.recommends[1],$scope.recommends[2],$scope.recommends[3],$scope.recommends[4]],
	[$scope.recommends[5],$scope.recommends[6],$scope.recommends[7],$scope.recommends[8],$scope.recommends[9]]]
	$scope.myproduct=Productlist.all()
	$scope.livingHomes=livingHome.all()
	$scope.myliving=[
	[$scope.livingHomes[0],$scope.livingHomes[1],$scope.livingHomes[2],$scope.livingHomes[3]],
	[$scope.livingHomes[4],$scope.livingHomes[5],$scope.livingHomes[6],$scope.livingHomes[7]]
	]
	//跳转商品页面
	$scope.tz_product=function(id){
		
		window.location="#/tab/product/"+id
	}
	//下拉刷新
   $scope.doRefresh=function(){
   	$timeout(function(){
   		$scope.$broadcast("scroll.refreshComplete");//刷新完成
   	},1000)
   }
	},0)
	
})

//引导动画
.controller('guideCtrl',function($scope,locals){
	$scope.comeHome=function(){
		locals.set('isload','已加载')
		window.location="#/tab/todayNew"
	}
})
//品牌团
.controller('brandCtrl', function($scope,brandGroup,brandcontent,$timeout) {
 	$scope.mybrandgroup=brandGroup.all()
 	$scope.mybrandcontent=brandcontent.all()
 	//跳转到商品页面
 	$scope.tz_product=function(id){
		
		window.location="#/tab/product/"+id
	}
 	//下拉刷新
   $scope.doRefresh=function(){
   	$timeout(function(){
   		$scope.$broadcast("scroll.refreshComplete");//刷新完成
   	},1000)
   }
})
//购物车
.controller('cartCtrl', function($scope) {
 	
})
//我--登录
.controller('meCtrl', function($scope,groom,$ionicPopup) {
  $scope.grooms=groom.all()
  $scope.groomlist=[
  	[$scope.grooms[0],$scope.grooms[1]],
  	[$scope.grooms[2],$scope.grooms[3]],
  	[$scope.grooms[4],$scope.grooms[5]],
  	[$scope.grooms[6],$scope.grooms[7]]
  ]
  $scope.phoneTB=function(){
		$ionicPopup.confirm({
			template: "'柚子街'想要打开'手机淘宝'",
	        okText:"打开",
	        cancelText:"取消"
		})
	}
})
//我----登录----我的资料
.controller('loginCtrl',function($scope,$ionicActionSheet){
	$scope.picture=function(){
		var hideSheet= $ionicActionSheet.show({
            cancelOnStateChange:true,
			buttons: [
				{ text: "从手机相册选择" },
				{ text: "拍照" }
			],
			cancelText: "取消",
			cancel: function() {
                console.log('执行了取消操作');
                return true;
			}
		});
	}
})
//我---登录----我的资料----我的昵称
.controller('nicknameCtrl',function($scope){
	$scope.Preservation=function(){
		alert("保存成功")
	}
})
//我---登录----我的资料----账号安全
.controller('accountCtrl',function($scope,$ionicPopup,$ionicActionSheet,$ionicModal){
	//微信弹出框
	$scope.WeChat=function(){
		$ionicPopup.confirm({
			template: "'柚子街'想要打开'微信'",
	        okText:"打开",
	        cancelText:"取消"
		})
	}
	//QQ弹出框
	$scope.myQQ=function(){
		$ionicPopup.confirm({
			template: "'柚子街'想要打开'QQ'",
	        okText:"打开",
	        cancelText:"取消"
		})
	}
	//微博对话框
	$ionicModal.fromTemplateUrl("templates/modal.html",{
			 scope: $scope,
			 animation:"slide-in-up"
		}).then(function(modal){
			$scope.modal=modal;
		})
	//手机上拉菜单
	$scope.show=function(){
		$ionicActionSheet.show({
            cancelOnStateChange:true,
			buttons: [
				{ text: "更换手机号码" }
			],
			cancelText: "取消"
		})
	}
})
//微博对话框---控制器
.controller('TaskCtrl',function($scope){
	
	//关闭对话框
 		$scope.close=function(){
			$scope.modal.hide()
		}	
})
//我---登录----我的资料----账号安全----修改密码
.controller('verificationCtrl',function($scope){
	
})
//我---登录----帮助与反馈
.controller('helpCtrl',function($scope,helpping){
	$scope.myhelp=helpping.all()
	//跳转到更多页面
	$scope.more=function(id){
		window.location="#/tab/more/"+id
	}
	//跳转到帮助详情页面
	$scope.details=function(id){
		window.location="#/tab/details/"+id;
	}
})
//我---登录----帮助与反馈---更多
.controller('moreCtrl',function($scope,$stateParams,helpping){
	$scope.myId=$stateParams.myid
	$scope.myhelp=helpping.all()
	//循环数组获取与id相同的数据
	for(var i=0;i<$scope.myhelp.length;i++){
		if($scope.myhelp[i].id==$scope.myId){
			console.log($scope.myhelp[i].name)
			$scope.faces=$scope.myhelp[i].face
			$scope.names=$scope.myhelp[i].name
			
		}
	}
	//跳转到帮助详情页面
	$scope.details=function(id){
		window.location="#/tab/details/"+id;
	}
})
//我---登录----帮助与反馈---帮助详情
.controller('detailsCtrl',function($scope,$stateParams,helpping){
	$scope.myid=$stateParams.myid
	$scope.myhelp=helpping.all()
	console.log($scope.myid)
	//循环数组获取与id相同的数据
	for(var i=0;i<$scope.myhelp.length;i++){
//		console.log($scope.myhelp[i].face)
		for(var j=0;j<$scope.myhelp[i].face.length;j++){
			console.log($scope.myhelp[i].face[j].myid)
			if($scope.myhelp[i].face[j].myid==$scope.myid){
				$scope.faces=$scope.myhelp[i].face[j]
				console.log($scope.faces)
				return
			}
		}
	}
})
//我---登录----设置
.controller('settingCtrl',function($scope){
	
})
//我---登录----我的资料---收货地址
.controller('addressCtrl',function($scope){
	
})
//商品页
.controller('productCtrl',function($scope,$stateParams,$rootScope,Recommend,Productlist,brandGroup,brandcontent,$timeout){
	$scope.myId=$stateParams.myId
	
	$scope.recommends=Recommend.all()
	for(var i=0;i<$scope.recommends.length;i++){
		
		if($scope.recommends[i].id==$scope.myId){
			$scope.name=$scope.recommends[i].name
			console.log($scope.recommends[i].name)
			
		}
	}
	$scope.myproduct=Productlist.all()
	for(var j=0;j<$scope.myproduct.length;j++){
		if($scope.myproduct[j].id==$scope.myId){
			$scope.name=$scope.myproduct[j].name
			
		}
	}
	$scope.mybrandgroup=brandGroup.all()
	for(var p=0;p<$scope.mybrandgroup.length;p++){
		if($scope.mybrandgroup[p].id==$scope.myId){
			$scope.name=$scope.mybrandgroup[p].name
			
		}
	}
 	$scope.mybrandcontent=brandcontent.all()
 	for(var q=0;q<$scope.mybrandcontent.length;q++){
		if($scope.mybrandcontent[q].id==$scope.myId){
			$scope.name=$scope.mybrandcontent[q].name
			
		}
	}
 	//后退
 	$scope.historys=function(){
 		window.history.back()
 	}
	//数据
	$scope.products=[
		[$scope.myproduct[0],$scope.myproduct[1]],
		[$scope.myproduct[2],$scope.myproduct[3]],
		[$scope.myproduct[4],$scope.myproduct[5]],
		[$scope.myproduct[6],$scope.myproduct[7]],
		[$scope.myproduct[8],$scope.myproduct[9]],
		[$scope.myproduct[10],$scope.myproduct[11]],
		[$scope.myproduct[12],$scope.myproduct[13]],
		[$scope.myproduct[14],$scope.myproduct[9]]
	]
	//倒计时
		setInterval(function(){
			daojishi(2017,8,18,"clock")
		},1000)
		function daojishi(year,month,day,divName){
			var endDate=new Date(year,month,day)
			var nowDate=new Date
			var dao=endDate.getTime()-nowDate.getTime()
			var s=parseInt(dao/1000%60)
			var fen=parseInt(dao/1000/60%60)
			var hour=parseInt(dao/1000/3600%24)
			var tian=parseInt(dao/1000/3600/24)
			var mybox=document.getElementById(divName)
			mybox.innerHTML="距离结束：  "+tian+"天 "+hour+":"+fen+":"+s
		}
		//下拉刷新
   $scope.doRefresh=function(){
   	$timeout(function(){
   		$scope.$broadcast("scroll.refreshComplete");//刷新完成
   	},1000)
   }
})
//搜索
//我---登录----我的资料---收货地址
.controller('classifyCtrl',function($scope,classifys,classRight){
	//左边数据
	$scope.myclassify=classifys.all()
	$scope.that="服饰内衣"
	$scope.myclassify["服饰内衣"]=true
	//右边数据
	$scope.myclassRight=classRight.all()
	$scope.first=$scope.myclassRight[0].first
	$scope.main=$scope.myclassRight[0].main
	$scope.classMain=[
		[$scope.main[0],$scope.main[1],$scope.main[2]],
		[$scope.main[3]]
	]
	$scope.last=$scope.myclassRight[0].last
	//点击切换数据
	$scope.classifying=function(x){
		$scope.myclassify["服饰内衣"]=false
		$scope.myclassify[$scope.that]=false
		$scope.myclassify[x]=true
		$scope.that=x
		
	for(var i=0;i<$scope.myclassRight.length;i++){
		if($scope.myclassRight[i].name==$scope.that){
			$scope.first=$scope.myclassRight[i].first
			$scope.main=$scope.myclassRight[i].main
			$scope.classMain=[
				[$scope.main[0],$scope.main[1],$scope.main[2]],
				[$scope.main[3],$scope.main[4],$scope.main[5]],
				[$scope.main[6],$scope.main[7]]
			]
			$scope.last=$scope.myclassRight[i].last
			console.log($scope.main)
		}
	}
	}
	//跳转到搜索页
	$scope.doingWant=function(){
		window.location="#/tab/search"
		
	}
})
//分类----搜索
.controller('searchCtrl',function($scope,hotSearch,history){
	//是否有历史记录
	if(!history.get("mysearch")){
		$scope.myshow=false
		history.set("mysearch","[]")
	}

//	window.location.reload()
	$scope.myhots=hotSearch.all()
	$scope.myHotSearch=[
		[$scope.myhots[0],$scope.myhots[1],$scope.myhots[2]],
		[$scope.myhots[3],$scope.myhots[4],$scope.myhots[5]],
		[$scope.myhots[6],$scope.myhots[7],$scope.myhots[8]],
		[$scope.myhots[9]]
	]
	$scope.his=function(des){
		console.log(des)
		$scope.historys=history.get("mysearch")
		console.log($scope.historys)
	    var historyarr=JSON.parse($scope.historys)
		
		historyarr.push(des)
		console.log(historyarr)
		var historystr=JSON.stringify(historyarr)
		history.set("mysearch",historystr)
	}
	$scope.historys=history.get("mysearch")
	$scope.myhistorys=JSON.parse($scope.historys)
	$scope.myshow=true
	$scope.clearhistory=function(){
		history.remove("mysearch")
		$scope.myshow=false
	}
	$scope.clears=function(){
		window.history.back()
	}
})

//底部tabs隐藏显示的指令
.directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          $rootScope.hideTabs=attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  })