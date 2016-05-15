'use strict';

angular.module('mashPotatoes').directive('userAvatar', ['$reactive', 'user', 'utils', function ($reactive, user, utils) {
	return {
		restrict: 'E', // E = element, A = attribute, C = class, M = comment
		scope: { // @ = local scope (string), = = bi-directional binding, & = parent execution binding (function)
            'ngModel': '=',
			'diameter': '=',
			'allowSet': '='
		},
		templateUrl: 'client/shared/users/userAvatarView.ng.html',
		controller: function ($scope) {

			$scope.imgStyle = {};

			$scope.$watch('allowSet', function(newVal, oldVal) {
				if (newVal) {
					$scope.imgStyle.cursor = 'pointer';
				} else {
					$scope.imgStyle.cursor = 'default';
				}
			})

			$scope.$watch('diameter', function(newVal, oldVal) {
				if (!newVal) newVal = 50;
				$scope.imgStyle.height = $scope.imgStyle.width = newVal + 'px';
			});

			$scope.$watch('ngModel', function(newVal, oldVal) {
				if (newVal) {
					$scope.displayAvatar(newVal);
				} else {
					$scope.displayAvatar(user.currentUser);
				}
			}, true);

			$scope.currentUser = user.currentUser;

			$scope.$watch('currentUser', function(newVal, oldVal) {
				if (!$scope.ngModel) $scope.displayAvatar(newVal);
			});


			$scope.displayAvatar = function(user) {
				var avatar = '/img/avatar_default.png';
				if (user && user.profile) {
					if (user.profile.avatar) {
						avatar = user.profile.avatar.urls.original;
						//} else if (newVal.profile.name) {
						//imgStyle['background'] =
					} else {
						if (user.profile.gender == 'female') {
							avatar = '/img/default_f.png';
						} else if (user.profile.gender == 'male') {
							avatar = '/img/default_m.png';
						}
					}
				}
				$scope.imgStyle.backgroundImage = 'url("' + avatar + '")';
			}

			$scope.setAvatar = function(ev) {
				if (!$scope.allowSet) return;
				utils.dialog(ev, 'dialogUserAvatarFormView.ng.html', {
					title: 'Set Avatar'
				})
				.then(function (result) {
					//if (result.type == 'add') {
					//	result.obj.value = angular.lowercase(result.obj.Name);
					//	$scope.itemList.push(result.obj);
					//	$scope.selectedItem = result.obj;
					//}
				}, function () {

				});
			}

			$reactive(this).attach($scope);

			//setInterval(function() {
			//	console.log('avatar ngModel', $scope.ngModel);
			//}, 1000);
            //
			//user.onReady(function() {
			//	if (!$scope.ngModel) $scope.ngModel = user.currentUser;
			//});
		},
		link: function ($scope, element, attrs) {

		}
	}
}]);