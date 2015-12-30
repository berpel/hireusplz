angular.module('hireusplz')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    // ROUTES
    $stateProvider
      // abstract parent state retrieve cached data for all controllers
      .state('index', {
        url: '/',
        templateUrl: 'index'
      })

  }]);

