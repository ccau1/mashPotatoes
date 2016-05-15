angular.module('mashPotatoes').controller('ProjectDetailController', ['$scope', '$reactive', '$stateParams', function($scope, $reactive, $stateParams) {
    $reactive(this).attach($scope);

    let projectId = $stateParams.id;

    $scope.helpers({
        project: function() {
            return Projects.findOne({ _id: projectId });
        }
    });

}]);