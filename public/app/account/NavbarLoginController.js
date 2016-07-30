(function(){
	angular.module('codingAcademy').controller('NavbarLoginController',function($scope, $http, $location, NotifierService, IdentityService, UserService){
		$scope.identity = IdentityService;
		console.log("$scope.identity",$scope.identity);	
		$scope.signIn = function(username, password){
			$http.post('/login',{username:username, password:password}).then(function(response){
				if(response.data.success){
					var user = new UserService();
					angular.extend(user, response.data.user);
					IdentityService.currentUser = user;
					NotifierService.notifySuccess('successful login');
				}
				else {
					NotifierService.notifyFailed('incorrect username/password');
				}
			});
		};

		$scope.signOut = function(){
			$http.post('/logout',{logout: true})
			.then(function(){
				 $location.path('/');
				IdentityService.currentUser = undefined;
			})
			.then(function(){
				$scope.username = "";
				$scope.password = "";
				NotifierService.notifyLogout('successful logout');
			});
		};
	});
})();