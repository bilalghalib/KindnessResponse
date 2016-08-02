var app = angular.module('response', [
    'ionic',
    'ngCordova',
    'firebase',
    'angularMoment',
    'ngIOS9UIWebViewPatch',
    'ngSanitize',
    'btford.socket-io',
    'response.controllers',
    'response.services',
    'response.filters',
    'response.utils'
]);


app.constant("FIREBASE_URL", 'https://kindnessresponders.firebaseio.com');
app.constant("FACEBOOK_APP_ID", '785775914860393');


app.run(function ($rootScope, $ionicPlatform, $cordovaStatusbar) {


    $ionicPlatform.ready(function () {

        // Hide the accessory bar by default
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        // Color the iOS status bar text to white
        if (window.StatusBar) {
            $cordovaStatusbar.overlaysWebView(true);
            $cordovaStatusbar.style(0); //Light
        }
    });
});

app.config(function ($stateProvider, $urlRouterProvider, FACEBOOK_APP_ID) {
    openFB.init({appId: FACEBOOK_APP_ID});
});



app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
            .state('intro', {
                url: '/',
                templateUrl: 'templates/intro.html',
                controller: 'IntroCtrl'
            })

            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            .state('tab.events', {
                url: "/events",
                views: {
                    'tab-events': {
                        templateUrl: "templates/tabs/events.html",
                        controller: 'DisplayEventsCtrl'
                    }
                }
            })

            .state('tab.EventTitle', {
                url: '/events/event:eventId',
                views: {
                    'tab-events': {
                        templateUrl: 'templates/EventTitle.html',
                        controller: 'EventsCtrl'
                    }
                }
            })

            .state('tab.responseDetail', {
                url: '/events/event/event:eventId',
                views: {
                    'tab-events': {
                        templateUrl: 'templates/responseDetail.html',
                        controller: 'ResonseDCtrl'
                    }
                }
            })

            .state('tab.chat', {
                url: '/events/event/chat:eventId',
                views: {
                    'tab-events': {
                        templateUrl: 'templates/chatroom.html',
                        controller: 'EventsCtrl'
                    }
                }
            })


            .state('tab.activity', {
                url: "/activity",
                views: {
                    'tab-activity': {
                        templateUrl: "templates/tabs/activity.html",
                        controller: 'ActCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: "/account",
                views: {
                    'tab-account': {
                        templateUrl: "templates/tabs/account.html",
                        controller: 'CreateCauseCtrl'
                    }
                }
            })
            
            .state('tab.useraccount', {
                url: "/activity/account",
                views: {
                    'tab-activity': {
                        templateUrl: "templates/tabs/account.html",
                        controller: 'CreateCauseCtrl'
                    }
                }
            })
            
              .state('tab.comments', {
                url: "/activity/comments",
                views: {
                    'tab-activity': {
                        templateUrl: "templates/commentList.html",
                        controller: 'CreateCauseCtrl'
                    }
                }
            })

            .state('tab.createCause', {
                url: '/account/createCause',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/createCause.html',
                        controller: 'CreateCauseCtrl'
                    }
                }
            })

            ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

});
