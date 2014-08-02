var restaurantApp = angular.module('AngApp', ['ngRoute']);

// Change Angular JS variable sintax
restaurantApp.config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

// Define app routes
restaurantApp.config(function ($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'pages/home.html', controller: 'HomeCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
});

// Set main variables and run app
restaurantApp.run(function ($rootScope) {
  $rootScope.appTitle = 'Ang App Title';
  $rootScope.appName = 'Ang App';
});
