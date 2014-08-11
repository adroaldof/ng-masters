var mainApp = angular.module('AngApp', ['ngRoute']);

// Change Angular JS variable sintax
mainApp.config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

// Define app routes
mainApp.config(function ($routeProvider) {
  $routeProvider.when('/angulife', {templateUrl: 'pages/angulife.html', controller: 'AngulifeCtrl'});
  $routeProvider.when('/home', {templateUrl: 'pages/home.html', controller: 'HomeCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
});

// Set main variables and run app
mainApp.run(function ($rootScope) {
  $rootScope.appTitle = 'Ang App Title';
  $rootScope.appName = 'Ang App';
});


// Set Globals variables and functions
if (!window.globals) {
  var globals = {};
}
