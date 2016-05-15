angular.module('mashPotatoes').controller('ProjectCreateController', ['$scope', function($scope) {
    $scope.formFields = {};
    $scope.c = Constants;
    $scope.expectedTimeSpanTypes = lodash.values(Constants.ExpectedTimeSpanType);

    $scope.addParticipantRequirement = function(obj) {
        if (!obj) obj = [];
        obj.push({
            skillRequirements: [],
            minReviewCount: 0,
            minStarRating: 0
        });
    }

    $scope.addSkillRequirement = function(pr) {
        if (!pr) pr = [];
        pr.push({ skill: '', isRequired: true });
    }
}]);