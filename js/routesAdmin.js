angular.module('app.routes', [])


    .config(function ($stateProvider, $urlRouterProvider) {

        var authUser = localStorage.getItem("Parse/" + appID + "/currentUser");
        $stateProvider

            .state('login', {
                url: '/login',
                cache: false,
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('recover', {
                url: '/recover',
                cache: false,
                templateUrl: 'templates/recover.html',
                controller: 'recoverCtrl'
            })

            .state('signup', {
                url: '/signup',
                cache: false,
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            })

            .state('logout', {
                url: '/logout',
                controller: 'logoutCtrl'
            })

        $urlRouterProvider.otherwise('/login');
    })

    .run(function ($rootScope, $location, $state, $ionicSideMenuDelegate, $window) {
        var authUser = localStorage.getItem("Parse/" + appID + "/currentUser");
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams, error) {
            if (!authUser || authUser === null) {
                $ionicSideMenuDelegate.canDragContent(false);
            }
        });
    })