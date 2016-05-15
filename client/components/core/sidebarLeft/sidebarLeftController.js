angular.module('mashPotatoes').controller('SidebarLeftController', ['$scope', '$state', function ($scope, $state) {
    $scope.$on('$includeContentLoaded', function () {
        //Layout.initSidebar(); // init sidebar
    });

    $scope.menuSections = [
        {
            header: '',
            items: [
                {
                    title: 'Create',
                    subtitle: '',
                    desc: '',
                    onClick: function() {
                        $state.go('projectCreate');
                    }
                },
                {
                    title: 'Browse',
                    subtitle: '',
                    desc: 'Search for Available Projects',
                    onClick: function() {
                        $state.go('projectSearch');
                    }
                },
                {
                    title: 'My Projects',
                    subtitle: '',
                    desc: 'Currently Developing Projects',
                    onClick: function() {
                        $state.go('projects');
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