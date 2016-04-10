var onecastApp = angular.module('onecastApp', ['ngRoute', 'ui.bootstrap']);

onecastApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'actorwelcome.html',
            controller: 'mainController'
    	})
        .when('/actorhome', {
    		templateUrl: 'actorwelcome.html',
            controller: 'mainController'
    	})
        .when('/directorhome', {
    		templateUrl: 'directorwelcome.html',
            controller: 'mainController'
    	})
        .otherwise({
            redirectTo: "/"
        });
    console.log("Config done");
});

onecastApp.controller('mainController', function($scope, $rootScope, $window) {
    $rootScope.pageTitle = "OneCast";
});