//import angular from 'angular';
import angularMeteor from 'angular-meteor';

mashPotatoesApp = angular.module('mashPotatoes', [
    angularMeteor,
    //"angular-meteor",
    "ui.router",
    "ngMaterial"
]);


/* Setup global settings */
mashPotatoesApp.provider('settings', function () {
    // supported languages
    var settings = {
        theme: 'theme-light',
        $get: function () {
            return settings;
        }
    };

    return settings;
});

mashPotatoesApp.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error === 'AUTH_REQUIRED') {
            $state.go('login');
        }
    });
});

mashPotatoesApp.controller('AppController', ['$scope', '$state', function($scope, $state) {
    $scope.$state = $state;
}]);

