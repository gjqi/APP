// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  //今日上新
  .state('tab.todayNew', {
    url: '/todayNew',
    cache:'false',//缓存
    views: {
      'tab-todayNew': {
        templateUrl: 'templates/tab-todayNew.html',
        controller: 'todayNewCtrl'
      }
    }
  })
  //引导动画
  .state("tab.guide",{
  	url:"/guide",
  	cache:'false',//缓存
  	views:{
  		"tab-todayNew":{
  			templateUrl:"templates/tab-guide.html",
  			controller:"guideCtrl"
  		}
  	}
  
  })
  //品牌团
  .state('tab.brand', {
      url: '/brand',
      cache:'false',//缓存
      views: {
        'tab-brand': {
          templateUrl: 'templates/tab-brand.html',
          controller: 'brandCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      cache:'false',//缓存
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
  //购物车
  .state('tab.cart', {
    url: '/cart',
    cache:'false',//缓存
    views: {
      'tab-cart': {
        templateUrl: 'templates/tab-cart.html',
        controller: 'cartCtrl'
      }
    }
  })
  //我---个人中心
  .state('tab.me', {
    url: '/me',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-me.html',
        controller: 'meCtrl'
      }
    }
  })
  //我----登录----我的资料
  .state('tab.login', {
    url: '/login',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-login.html',
        controller: 'loginCtrl'
      }
    }
  })
  //我---登录----我的资料----我的昵称
  .state('tab.nickname', {
    url: '/nickname',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-nickname.html',
        controller: 'nicknameCtrl'
      }
    }
  })
  //我---登录----我的资料----账号安全
  .state('tab.account', {
    url: '/account',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-account.html',
        controller: 'accountCtrl'
      }
    }
  })
  //我---登录----我的资料----账号安全----修改密码
  .state('tab.verification', {
    url: '/verification',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-verification.html',
        controller: 'verificationCtrl'
      }
    }
  })
  //我---登录----我的资料---收货地址
  .state('tab.address', {
    url: '/address',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-address.html',
        controller: 'addressCtrl'
      }
    }
  })
  //我---登录----帮助与反馈
  .state('tab.help', {
    url: '/help',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-help.html',
        controller: 'helpCtrl'
      }
    }
  })
  //我---登录----帮助与反馈---更多
  .state('tab.more', {
    url: '/more/:myid',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-more.html',
        controller: 'moreCtrl'
      }
    }
  })
  //我---登录----帮助与反馈---帮助详情
  .state('tab.details', {
    url: '/details/:myid',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-details.html',
        controller: 'detailsCtrl'
      }
    }
  })
  //我---登录----设置
  .state('tab.setting', {
    url: '/setting',
    cache:'false',//缓存
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-setting.html',
        controller: 'settingCtrl'
      }
    }
  })
  //今日上新跳转到商品页
  .state('tab.product', {
    url: '/product/:myId',
    cache:'false',//缓存
    views: {
      'tab-todayNew': {
        templateUrl: 'templates/tab-product.html',
        controller: 'productCtrl'
      }
    }
  })
  //品牌团跳转到商品页
  .state('tab.brandproduct', {
    url: '/brandproduct/:myId',
    cache:'false',//缓存
    views: {
      'tab-brand': {
        templateUrl: 'templates/tab-product.html',
        controller: 'productCtrl'
      }
    }
  })
  //分类
  .state('tab.classify', {
    url: '/classify',
    cache:'false',//缓存
    views: {
      'tab-todayNew': {
        templateUrl: 'templates/tab-classify.html',
        controller: 'classifyCtrl'
      }
    }
  })
  //分类---搜索
  .state('tab.search', {
    url: '/search',
    cache:'false',//缓存
    views: {
      'tab-todayNew': {
        templateUrl: 'templates/tab-search.html',
        controller: 'searchCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/todayNew');

});
