angular.module('app.routes', [])


    .config(function ($stateProvider, $urlRouterProvider) {

        var authUser = localStorage.getItem("Parse/" + appID + "/currentUser");
        $stateProvider


            .state('settings', {
                url: '/settings',
                cache: false,
                templateUrl: 'templates/settings.html',
                controller: 'settingsCtrl',
                onEnter: function () {
                }
            })

            .state('about', {
                url: '/About',
                cache: false,
                templateUrl: 'templates/about.html',
                controller: 'aboutCtrl',
                onEnter: function () {
                }
            })

            .state('achievements', {
                url: '/Achievements',
                cache: false,
                templateUrl: 'templates/achievements.html',
                controller: 'achievementsCtrl',
                onEnter: function () {
                }
            })

            .state('awards', {
                url: '/Awards',
                cache: false,
                templateUrl: 'templates/awards.html',
                controller: 'awardsCtrl',
                onEnter: function () {
                }
            })

            .state('interests', {
                url: '/Interests',
                cache: false,
                templateUrl: 'templates/interests.html',
                controller: 'interestsCtrl',
                onEnter: function () {
                }
            })

            .state('help', {
                url: '/help',
                cache: false,
                templateUrl: 'templates/help.html',
                controller: 'helpCtrl',
                onEnter: function () {
                }
            })

            .state('credibility', {
                url: '/Credibility',
                cache: false,
                templateUrl: 'templates/credibility.html',
                controller: 'credibilityCtrl',
                onEnter: function () {
                }
            })


            .state('educationTraining', {
                url: '/EducationTraining',
                cache: false,
                templateUrl: 'templates/educationTraining.html',
                controller: 'educationTrainingCtrl',
                onEnter: function () {
                }
            })

            .state('militaryExperience', {
                url: '/MilitaryExperience',
                cache: false,
                templateUrl: 'templates/militaryExperience.html',
                controller: 'militaryExperienceCtrl',
                onEnter: function () {
                }
            })

            .state('objectivesGoals', {
                url: '/ObjectivesGoals',
                cache: false,
                templateUrl: 'templates/objectivesGoals.html',
                controller: 'objectivesGoalsCtrl',
                onEnter: function () {
                }
            })


            .state('skills', {
                url: '/Skills',
                cache: false,
                templateUrl: 'templates/skills.html',
                controller: 'skillsCtrl',
                onEnter: function () {
                }
            })


            .state('socialMediaProfiles', {
                url: '/SocialMediaProfiles',
                cache: false,
                templateUrl: 'templates/socialMediaProfiles.html',
                controller: 'socialMediaProfilesCtrl',
                onEnter: function () {
                }
            })

            .state('socialResponsibility', {
                url: '/SocialResponsibility',
                cache: false,
                templateUrl: 'templates/socialResponsibility.html',
                controller: 'socialResponsibilityCtrl',
                onEnter: function () {
                }
            })

            .state('status', {
                url: '/Status',
                cache: false,
                templateUrl: 'templates/status.html',
                controller: 'statusCtrl',
                onEnter: function () {
                }
            })

            .state('summaries', {
                url: '/Summaries',
                cache: false,
                templateUrl: 'templates/summaries.html',
                controller: 'summariesCtrl',
                onEnter: function () {
                }
            })

            .state('workHistory', {
                url: '/WorkHistory',
                cache: false,
                templateUrl: 'templates/workHistory.html',
                controller: 'workHistoryCtrl',
                onEnter: function () {

                }
            })

        $urlRouterProvider.otherwise('/Status');
    })

    .run(function ($rootScope, $location, $state, $ionicSideMenuDelegate, $window) {
        var authUser = localStorage.getItem("Parse/" + appID + "/currentUser");
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams, error) {

            if (!authUser || authUser === null) {
                $ionicSideMenuDelegate.canDragContent(false);
                $window.location.replace("../");
            } else if (authUser) {
                $ionicSideMenuDelegate.canDragContent(true);
            }
        });
    })