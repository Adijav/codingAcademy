(function(){
	angular.module('codingAcademy').factory('IdentityService',function($window, UserService){
		var currentUser;
		if(!!$window.bootstrappedUserObject){
			currentUser = new UserService();
			angular.extend(currentUser, $window.bootstrappedUserObject);
		}
		return {
			currentUser: currentUser,
			isAuthenticated: function(){
				return !!this.currentUser;
			}
		};
	});
})();