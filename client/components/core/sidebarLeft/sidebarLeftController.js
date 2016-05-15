angular.module('mashPotatoes').controller('SidebarLeftController', ['$scope', '$state', function ($scope, $state) {
    $scope.$on('$includeContentLoaded', function () {
        //Layout.initSidebar(); // init sidebar
    });

    $scope.menuSections = [
        {
            header: 'header 1',
            items: [
                {
                    title: 'title 1',
                    subtitle: 'subtitle 1',
                    desc: 'desc 1',
                    onClick: function() {
                        console.log('hit title 1');
                    }
                },
                {
                    title: 'title 2',
                    subtitle: 'subtitle 2',
                    desc: '',
                    onClick: function() {
                        console.log('hit title 2');
                    }
                }
            ]
        }
    ];

    $scope.logout = function() {
        Accounts.logout();
        $state.go('login');
    }
}]);