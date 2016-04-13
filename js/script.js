var onecastApp = angular.module('onecastApp', ['ngRoute', 'ui.bootstrap', 'ngMaterial', 'ngTable']);

onecastApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'actorwelcome.html',
            controller: 'mainController'
    	})
        .when('/actorhome', {
    		templateUrl: 'actorwelcome.html',
            controller: 'mainActorController'
    	})
        .when('/directorhome', {
    		templateUrl: 'directorwelcome.html',
            controller: 'mainDirectorController'
    	})
        .when('/romeojuliet', {
            templateUrl: 'actor.html',
            controller: 'actorController'
        })
        .when('/productionsearch', {
            templateUrl: 'actor.html',
            controller: 'searchController'
        })
        .when('/summary', {
    		templateUrl: 'actor-summary.html',
            controller: 'mainController'
    	})
        .when('/exampleplay', {
    		templateUrl: 'production.html',
            controller: 'productionController'
    	})
        .when('/romeojuliet', {
    		templateUrl: 'actor-page.html',
            controller: 'actorPageController'
    	})
        .when('/directorcreate', {
    		templateUrl: 'new-casting.html',
            controller: 'castingController',
            css: 'css/partial1.css'
    	})
        .otherwise({
            redirectTo: "/"
        });
});

onecastApp.controller('mainController', function($scope, $rootScope, $window, $mdDialog) {
    $rootScope.pageTitle = "OneCast";
});

onecastApp.controller('mainActorController', function($scope, $rootScope, $window, $mdDialog) {
    $rootScope.pageTitle = "OneCast";
    
    $rootScope.newOption = "New What?";
    $rootScope.homeUrl = "#actorhome";
    $rootScope.userIcon = "fa-user";
    $rootScope.newUrl = "#actorhome";
    
});

onecastApp.controller('mainDirectorController', function($scope, $rootScope, $window, $mdDialog) {
    $rootScope.pageTitle = "OneCast";
    
    $rootScope.newOption = "New Casting";
    $rootScope.homeUrl = "#directorhome";
    $rootScope.userIcon = "fa-film";
    $rootScope.newUrl = "#directorcreate";
    
});

onecastApp.controller('actorController', function($scope, $rootScope, $window) {
    $rootScope.pageTitle = "Romeo & Juliet";
});

onecastApp.controller('searchController', function($scope, ngTableParams) {
    var data = [{title: "Les Miserables", date: "2016-04-29", location: "Chesapeake, VA", description: "les miserables"},
                {title: "Cabaret", date: "2016-05-09", location: "Newark, NJ", description: "cabaret"},
                {title: "Mamma Mia", date: "2016-05-17", location: "Detroit, MI", description: "mamma mia"},
                {title: "Grease", date: "2016-05-26", location: "Dallas, TX", description: "grease"},
                {title: "Into the Woods", date: "2016-06-06", location: "Honolulu, HI", description: "into the woods"},
                {title: "Cinderella", date: "2016-07-11", location: "Albuquerque, NM", description: "cinderella"},
                {title: "The Phantom of the Opera", date: "2016-07-12", location: "Jersey City, NJ", description: "phantom of the opera"},
                {title: "The Wizard of Oz", date: "2016-07-19", location: "Sacramento, CA", description: "wizard of oz"},
                {title: "Titanic", date: "2016-07-25", location: "Pittsburgh, PA", description: "leonardo dicaprio <3"},
                {title: "A Streetcar Named Desire", date: "2016-08-18", location: "Fort Worth, TX", description: "street car named desire"},
                {title: "Breakfast at Tiffany's", date: "2016-08-30", location: "Aurora, CO", description: "breakfast at tiffanys"},
                {title: "Singin' in the Rain", date: "2016-09-15", location: "Oklahoma City, OK", description: "singin in the rain"},
                {title: "Hairspray", date: "2016-09-27", location: "Virginia Beach, VA", description: "hairspray"},
                {title: "Hamlet", date: "2016-10-03", location: "Toledo, OH", description: "hamlet"},
                {title: "The Duchess of Malfi", date: "2016-10-10", location: "Memphis, TN", description: "duchess of malfi"},
                {title: "Uncle Vanya", date: "2016-11-29", location: "Tampa, FL", description: "uncle vanya"}];
    
    $scope.isCollapsed=true;
    
    $scope.sortType = 'title';
    $scope.sortReverse = false;
//    $scope.searchProduction = '';
//    $scope.searchDate = '';
//    $scope.searchLocation = '';

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10000           // count per page
    }, {
        counts: [],
        getData: function($defer, params) {
            $defer.resolve(data);
        }
    });
    
    
});

onecastApp.controller('productionController', function($scope) {
    $scope.roles = [{name: "Romeo", description: "son to Montague"},
                {name: "Juliet", description: "daughter to Capulet"},
                {name: "Mercutio",description: "kinsman to the prince, and friend to Romeo"},
                {name: "Tybalt", description: "nephew to Lady Capulet"},
                {name: "The Nurse", description: "Nurse to Juliet"},
                {name: "Friar Laurence", description: "Franciscan"},
                {name: "Capulet", description: "head of Capulet household"},
                {name: "Paris", description: "a young nobleman"},
                {name: "Benvolio",  description: "nephew to Montague, and friend to Romeo"},
                {name: "Lady Capulet", description: "wife to Capulet"},
                {name: "Montague", description: "head of Montague household"},
                {name: "Balthasar", description: "servant to Romeo"},
                {name: "Peter", description: "servant to Juliet's nurse"},
                {name: "Abraham", description: "servant to Montague"},
                {name: "Sampson", description: "servant to Capulet"},
                {name: "Gregory", description: "servant to Capulet"}];
});

onecastApp.controller('actorPageController', function($scope) {
    $scope.roles = [{name: "Romeo", description: "son to Montague"},
                {name: "Juliet", description: "daughter to Capulet"},
                {name: "Mercutio",description: "kinsman to the prince, and friend to Romeo"},
                {name: "Tybalt", description: "nephew to Lady Capulet"},
                {name: "The Nurse", description: "Nurse to Juliet"},
                {name: "Friar Laurence", description: "Franciscan"},
                {name: "Capulet", description: "head of Capulet household"},
                {name: "Paris", description: "a young nobleman"},
                {name: "Benvolio",  description: "nephew to Montague, and friend to Romeo"},
                {name: "Lady Capulet", description: "wife to Capulet"},
                {name: "Montague", description: "head of Montague household"},
                {name: "Balthasar", description: "servant to Romeo"},
                {name: "Peter", description: "servant to Juliet's nurse"},
                {name: "Abraham", description: "servant to Montague"},
                {name: "Sampson", description: "servant to Capulet"},
                {name: "Gregory", description: "servant to Capulet"}];
});

onecastApp.controller('castingController', function($scope, $rootScope, $mdDialog) {
    
    $rootScope.pageTitle = "Create Casting";
    
    //$scope.showAddRole = function() {
        $mdDialog.show({
          controller: 'addRoleController',
          templateUrl: 'new-role.html',
          parent: angular.element('#wrapper'),
          clickOutsideToClose:true,
          //fullscreen: 'useFullScreen'
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    //}
    
});

onecastApp.controller('addRoleController', function($scope, $rootScope, $mdDialog) {
    
    
});

onecastApp.directive('fixedTableHeaders', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $timeout(function () {
        
          container = element.parentsUntil(attrs.fixedTableHeaders);
	        element.stickyTableHeaders({ scrollableArea: container, "fixedOffset": 2 });

      }, 0);
    }
  }
}]);