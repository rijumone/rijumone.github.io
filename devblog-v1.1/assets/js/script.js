	// create the module and name it blogApp
	var blogApp = angular.module('blogApp', ['ngRoute']);

	// configure our routes
	blogApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the fidelity page
			.when('/fidelity', {
				templateUrl : 'pages/fidelity.html',
				controller  : 'mainController'
			});
	});

	// create the controller and inject Angular's $scope
	blogApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	blogApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	blogApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});