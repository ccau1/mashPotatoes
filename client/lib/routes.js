angular.module("mashPotatoes").config(['$stateProvider', '$urlRouterProvider', 'settingsProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, settingsProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/");

    let baseResolve = {
        currentUser: function ($q) {
            if (Meteor.userId() == null) {
                return $q.reject('AUTH_REQUIRED');
            } else {
                return $q.resolve();
            }
        }
    };

    $stateProvider

    // Dashboard
        .state('home', {
            url: "/",
            views: {
                'main': {
                    templateUrl: "client/components/home/homeView.ng.html",
                    controller: "HomeController"
                }
            },
            data: {pageTitle: 'Overview'},//, pageSubTitle: 'statistics & reports'},
            resolve: lodash.assign({

            }, baseResolve)
        })
        .state('login', {
            url: "/login",
            views: {
                'account': {
                    templateUrl: 'client/components/core/account/loginView.ng.html',
                    controller: "LoginController"
                }
            },
            data: {pageTitle: 'Login'},//, pageSubTitle: 'statistics & reports'},
        })
        .state('register', {
            url: "/register",
            views: {
                'account': {
                    templateUrl: 'client/components/core/account/registerView.ng.html',
                    controller: "RegisterController"
                }
            },
            data: {pageTitle: 'Register'},//, pageSubTitle: 'statistics & reports'},
        })
        .state('resetpw', {
            url: "/reset-password",
            views: {
                'account': {
                    templateUrl: 'client/components/core/account/resetPasswordView.ng.html',
                    controller: "ResetPasswordController"
                }
            },
            data: {pageTitle: 'Reset Password'},//, pageSubTitle: 'statistics & reports'},
        })
}]);