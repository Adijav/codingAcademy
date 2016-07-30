(function(){
	angular.module("codingAcademy").controller('SignupController', function($scope, $location, $q, NotifierService, UserService, IdentityService){
		$scope.signUp = function(){
			var newUserData = {
				username: $scope.email,
				password: $scope.password,
				firstName: $scope.fname,
				lastName: $scope.lname
			};

			function createUser(newUserData){
				var newUser = new UserService(newUserData);
				var defer = $q.defer();
				newUser.$save().then(function(){
					IdentityService.currentUser = newUser;
					defer.resolve();
				}, function(response){
					defer.reject(response.data.reson);
				});
				return defer.promise;
			}

			createUser(newUserData).then(function(){
				NotifierService.notifySuccess('Account Created');
				$location.path('/');
			}, function(reason){
				NotifierService.notifyFailed('Failed to create account');
			});
		};
	});
})();