angular.module('mashPotatoes').controller('ProjectsController', ['$scope', '$reactive', function($scope, $reactive) {
    $reactive(this).attach($scope);

    $scope.helpers({
        projects: function() {
            return Projects.find({ $or: [{ owner: Meteor.userId() }, { participants: Meteor.userId() }] });
        }
    });
}]);