angular.module('mashPotatoes').controller('ProjectsController', ['$scope', '$reactive', '$state', function($scope, $reactive, $state) {
    $reactive(this).attach($scope);

    $scope.helpers({
        projects: function() {
            return Projects.find({ $or: [{ owner: Meteor.userId() }, { participants: Meteor.userId() }] });
        }
    });

    $scope.displayCreate = function() {
        $state.go('projectCreate');
    }
}]);