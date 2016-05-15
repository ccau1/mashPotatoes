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
                        $state.go('projects.create');
                    }
                },
                {
                    title: 'Browse',
                    subtitle: 'search for available projects',
                    desc: '',
                    onClick: function() {
                        $state.go('projects.search');
                    }
                },
                {
                    title: 'My Projects',
                    subtitle: 'Currently Developing Projects',
                    desc: '',
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