var app = angular.module('main', ['ui.bootstrap', 'ngTable']);

app.controller('DemoCtrl', function($scope, ngTableParams) {
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
                {title: "Uncle Vanya", date: "2016-11-29", location: "Tampa, FL", description: "uncle vanya"},
                {title: "Romeo & Juliet", date: "2016-11-29", location: "Tampa, FL", description: "A play"}];
    
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

app.directive('fixedTableHeaders', ['$timeout', function($timeout) {
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