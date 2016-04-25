var app = angular.module('main', ['ui.bootstrap', 'ngTable']);

app.controller('DemoCtrl', function($scope, ngTableParams) {
    var data = [{title: "Les Miserables", date: "2016-04-29", location: "Chesapeake, VA", description: "Les Misérables is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century."},
                {title: "Cabaret", date: "2016-05-09", location: "Newark, NJ", description: "Cabaret is a musical based on a book written by Christopher Isherwood, music by John Kander and lyrics by Fred Ebb. "},
                {title: "Mamma Mia", date: "2016-05-17", location: "Detroit, MI", description: "Mamma Mia! is a jukebox musical written by British playwright Catherine Johnson, based on the songs of ABBA."},
                {title: "Grease", date: "2016-05-26", location: "Dallas, TX", description: "Grease is a 1971 musical by Jim Jacobs and Warren Casey with additional songs written by John Farrar."},
                {title: "Into the Woods", date: "2016-06-06", location: "Honolulu, HI", description: "Into the Woods is a musical with music and lyrics by Stephen Sondheim and book by James Lapine."},
                {title: "Cinderella", date: "2016-07-11", location: "Albuquerque, NM", description: "Cinderella, or The Little Glass Slipper is a folk tale embodying a myth-element of unjust oppression/triumphant reward."},
                {title: "The Phantom of the Opera", date: "2016-07-12", location: "Jersey City, NJ", description: "The Phantom of the Opera is a musical with music by Andrew Lloyd Webber and lyrics by Charles Hart with additions from Richard Stilgoe. Lloyd Webber and Stilgoe also wrote the musical's book together."},
                {title: "The Wizard of Oz", date: "2016-07-19", location: "Sacramento, CA", description: "Dorothy Gale is swept away to a magical land in a tornado and embarks on a quest to see the Wizard who can help her return home."},
                {title: "Titanic", date: "2016-07-25", location: "Pittsburgh, PA", description: "RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in the early morning of 15 April 1912, after colliding with an iceberg during her maiden voyage from Southampton, UK, to New York City, US."},
                {title: "A Streetcar Named Desire", date: "2016-08-18", location: "Fort Worth, TX", description: "A Streetcar Named Desire is a 1947 play written by American playwright Tennessee Williams which received the Pulitzer Prize for Drama in 1948."},
                {title: "Breakfast at Tiffany's", date: "2016-08-30", location: "Aurora, CO", description: "Based on Truman Capote's novel, this is the story of a young woman in New York City who meets a young man when he moves into her apartment building. He is with an older woman who is very wealthy, but he wants to be a writer. "},
                {title: "Singin' in the Rain", date: "2016-09-15", location: "Oklahoma City, OK", description: "A spoof of the turmoil that afflicted the movie industry in the late 1920s when movies went from silent to sound. When two silent movie stars', Don Lockwood and Lina Lamont, latest movie is made into a musical a chorus girl is brought in to dub Lina's speaking and singing. "},
                {title: "Hairspray", date: "2016-09-27", location: "Virginia Beach, VA", description: "In 1960s Baltimore, dance-loving teen Tracy Turnblad (Nikki Blonsky) auditions for a spot on The Corny Collins Show and wins. She becomes an overnight celebrity, a trendsetter in dance, fun and fashion. "},
                {title: "Hamlet", date: "2016-10-03", location: "Toledo, OH", description: "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare at an uncertain date between 1599 and 1602. "},
                {title: "The Duchess of Malfi", date: "2016-10-10", location: "Memphis, TN", description: "The Duchess of Malfi is a macabre, tragic play written by the English dramatist John Webster in 1612–13. It was first performed privately at the Blackfriars Theatre, then before a more general audience at The Globe, in 1613–14. "},
                {title: "Uncle Vanya", date: "2016-11-29", location: "Tampa, FL", description: "Uncle Vanya is a play by the Russian playwright Anton Chekhov. It was first published in 1897 and received its Moscow première in 1899 in a production by the Moscow Art Theatre, under the direction of Konstantin Stanislavski."},
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