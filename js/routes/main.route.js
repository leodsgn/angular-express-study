app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/templates/index/main.html',
			controller: 'mainCtrl'
		})

		.when('/404', {
			templateUrl: 'views/templates/404/404.html'
		})

		.otherwise({ redirectTo: '/404' });
});