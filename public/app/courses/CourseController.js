(function(){
	angular.module('codingAcademy').controller('CourseController',function($scope, IdentityService, NotifierService){

		$scope.signedInUser = IdentityService;

		$scope.notifyUser = function(signedIn){
			if(!signedIn) {
				NotifierService.notifyLogout("Please Sign in or Sign Up");
			}else {
				$scope.target = '_blank';
			}
		};

		$scope.courses = [
			{"title":"Web Development", "publishedDate":"1-1-2015", "url":"https://www.youtube.com/watch?v=3JluqTojuME&list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc"},
			{"title":"JavaScript", "publishedDate":"5-12-2014", "url":"https://www.youtube.com/watch?v=jkTzHEtHd54&list=PL41lfR-6DnOrwYi5d824q9-Y6z3JdSgQa"},
			{"title":"ReactJS", "publishedDate":"7-22-2015", "url":"https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b"},
			{"title":"BackboneJS", "publishedDate":"1-34-2016", "url":"https://www.youtube.com/watch?v=4t0n5k0X7ow&list=PLTjRvDozrdlwn9IsHWEs9IQv3HQob4bH3"},
			{"title":"AngularJS", "publishedDate":"9-2-2013", "url":"https://www.youtube.com/watch?v=zKkUN-mJtPQ&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl"},
			{"title":"MongoDB", "publishedDate":"3-23-2014", "url":"https://www.youtube.com/watch?v=1uFY60CESlM&list=PL6gx4Cwl9DGDQ5DrbIl20Zu9hx1IjeVhO"},
			{"title":"NodeJS", "publishedDate":"4-15-2015", "url":"https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_"},
			{"title":"ExpressJS", "publishedDate":"7-21-2015", "url":"https://www.youtube.com/watch?v=AEE7DY2AYvI&list=PLmnHfjYnFJz_XIzy35NaJ3DVDZuDO7bLj"},
			{"title":"MEAN stack", "publishedDate":"8-19-2016", "url":"https://www.youtube.com/watch?v=Jh0er2pRcq8"},
			{"title":"A Better CSS: LESS", "publishedDate":"12-10-2014", "url":"https://www.youtube.com/watch?v=YQYJUeokqOY&list=PL6gx4Cwl9DGCshbAx1JpBtNoKh8iKAAiy"},
			{"title":"A Better CSS: SASS", "publishedDate":"3-10-2015", "url":"https://www.youtube.com/watch?v=fbVD32w1oTo&list=PL2CB1F80266E986EA"},
			{"title":"Unit Testing using Jasmine", "publishedDate":"22-6-2016", "url":"https://www.youtube.com/watch?v=MEQqgy_UaTw&list=PLLIDEoLBMMnuSyCmiGUiSwbERkVlCTmhX"},
			{"title":"Javascript Testing with Mocha", "publishedDate":"25-2-2014", "url":"https://www.youtube.com/watch?v=s7uEqsKoHjM&list=PLjRztuaoupwIjFf92AKLDPDlCr4Vhc6L6"},
			{"title":"Build Automation with Gulp", "publishedDate":"27-8-2015", "url":"https://www.youtube.com/watch?v=wNlEK8qrb0M&list=PLLnpHn493BHE2RsdyUNpbiVn-cfuV7Fos"},
			{"title":"Introduction to Grunt", "publishedDate":"6-7-2014", "url":"https://www.youtube.com/watch?v=zfzUH9Keu1s&list=PLpP9FLMkNf55_LqrPuSUxcs84bMvQiPD8"},
			{"title":"Responsive websites with Bootstrap 3", "publishedDate":"26-4-2016", "url":"https://www.youtube.com/watch?v=DX-LoNaUr6w&list=PLRtjMdoYXLf6Inhz3BZ1h8Ti5q6lleOOC"},
			{"title":"Sublime Text 3", "publishedDate":"22-10-2014", "url":"https://www.youtube.com/watch?v=k01udDD-UwI&list=PLLnpHn493BHEYF4EX3sAhVG2rTqCvLnsP"},
			{"title":"GIT Fundamentals", "publishedDate":"7-5-2016", "url":"https://www.youtube.com/watch?v=HYoC-d6TEMM&list=PLtNErhYMkHnF9_J3tlidgMFqdJ7vDEQkE"},
			{"title":"Webstorm", "publishedDate":"8-1-2014", "url":"https://www.youtube.com/watch?v=PNZJox8pkls&list=PLQ176FUIyIUb0zTe7k4ZKkhMsR-slKu3w"},
			{"title":"jQuery for Begineers", "publishedDate":"2-12-2015", "url":"https://www.youtube.com/watch?v=a59kOE2Ma1Q&list=PL6n9fhu94yhVDV697uvHpavA3K_eWGQap"}
		];
	});
})();