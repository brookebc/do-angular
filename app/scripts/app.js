'use strict';

angular
  .module('doAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'newPageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


