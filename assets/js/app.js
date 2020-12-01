	angular.module('myApp.controllers', []);
	angular.module('myApp.models', []);
	var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.models']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		//
		$locationProvider.html5Mode(true);
	  // For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise(function($injector) {
			$injector.invoke(function($state) {
					$state.transitionTo("404", {}, false);
			});
		});
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

		.state('newsroom', {
			url: "/newsroom",
			templateUrl: "partials/newsroom.html"
		})

		.state('contact', {
			url: "/contact",
			templateUrl: "partials/contact.html"
		})

		.state('404', {
			templateUrl: 'partials/404.html'
	 })

	});