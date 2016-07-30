	(function(){
	angular.module('codingAcademy',['ngResource','ngRoute']);

	angular.module('codingAcademy').config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);

		$routeProvider
		.when('/', {
			templateUrl: '/partials/main/main',
			controller: 'MainController'
		})
		.when('/signup', {
			templateUrl: '/partials/account/signup',
			controller: 'SignupController'
		})
		.when('/courses', {
			templateUrl: '/partials/courses/course-list',
			controller: 'CourseController'
		});;
	});
})();