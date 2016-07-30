(function(){
	angular.module('codingAcademy').controller('MainController', function($scope){
		
		$scope.courses = [
			{"name":"Web Development", "featured":true ,"publishedDate":"1-1-2015"},
			{"name":"JavaScript", "featured": false,"publishedDate":"5-12-2014"},
			{"name":"ReactJS", "featured":true ,"publishedDate":"7-22-2015"},
			{"name":"BackboneJS", "featured": false,"publishedDate":"1-34-2016"},
			{"name":"AngularJS", "featured":true ,"publishedDate":"9-2-2013"},
			{"name":"MongoDB", "featured": false,"publishedDate":"3-23-2014"},
			{"name":"NodeJS", "featured":true ,"publishedDate":"4-15-2015"},
			{"name":"ExpressJS", "featured": false,"publishedDate":"7-21-2015"},
			{"name":"MEAN stack", "featured": true,"publishedDate":"8-19-2016"},
			{"name":"A Better CSS: LESS", "featured": true,"publishedDate":"2-10-2014"}
		];
	});
})();