'use strict';

var mainApp = angular.module('AngApp', ['ngRoute']);

// Change Angular JS variable sintax
mainApp.config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

// Define app routes
mainApp.config(function ($routeProvider) {
  $routeProvider.when('/tarefas', {templateUrl: 'views/todo.html', controller: 'TodoCtrl'});
  $routeProvider.when('/angulife', {templateUrl: 'views/angulife.html', controller: 'AngulifeCtrl'});
  $routeProvider.when('/buscarissues', {templateUrl: 'views/fetchissues.html'});
  $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'HomeCtrl'});
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
