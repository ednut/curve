	angular.module('myApp.controllers', []);
	angular.module('myApp.models', []);
	var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.models']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "partials/home.html"
	    })

	    .state('about', {
	      url: "/about",
	      templateUrl: "partials/about.html"
		})
		
		.state('services', {
			url: "/services",
			templateUrl: "partials/services.html"
		})

		.state('gallery', {
			url: "/gallery",
			templateUrl: "partials/gallery.html"
		})

		.state('blog', {
			url: "/blog",
			templateUrl: "partials/blog.html"
		})

		.state('contact', {
			url: "/contact",
			templateUrl: "partials/contact.html"
		})

		$locationProvider.html5Mode(true);

	});