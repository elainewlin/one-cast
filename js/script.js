var onecastApp = angular.module('onecastApp', ['ngRoute', 'ui.bootstrap', 'ngMaterial', 'ngTable', 'rzModule', 'ui-rangeSlider', 'daterangepicker', 'ngMessages']);

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
        .when('/romeojulietdirect', {
            templateUrl: 'casting-populated.html',
            controller: 'directorPlayController'
        })
        .when('/productionsearch', {
            templateUrl: 'actor.html',
            controller: 'searchController'
        })
        .when('/talentsearch', {
            templateUrl: 'director-search.html',
            controller: 'directorSearchController'
        })
        .when('/actorprofile', {
            templateUrl: 'actor-profile.html', 
            controller: 'actorProfileController'
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
        .when('/applycalendar', {
            templateUrl: 'actor-apply-cal.html'
        })
        .otherwise({
            redirectTo: "/"
        });
});

onecastApp.controller('mainController', function($scope, $rootScope, $window, $mdDialog) {
    $rootScope.pageTitle = "OneCast";
    $scope.primary = 'pink';
});

onecastApp.controller('directorPlayController', function($scope, $rootScope, $window, $mdDialog, $location, ngTableParams) {
    $scope.primary = 'pink';
    var data = [{role: "Romeo", accepted: true, rejected: false, backup: false, pending:false},
                {role: "Juliet", accepted: false, rejected: false, backup: false, pending:true},
                {role: "Capulet", accepted: false, rejected: false, backup: false, pending:false},
                {role: "King", accepted: false, rejected: false, backup: false, pending:false}];
    
    $scope.isCollapsed=true;
    
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10000           // count per page
    }, {
        counts: [],
        getData: function($defer, params) {
            $defer.resolve(data);
        }
    });
    
    $rootScope.castingObject = {
        title:"Romeo & Juliet", 
        description:"This play is about eternal love of the two - Romeo and Juliet. Then we will put some more text here just to see how it's going to look when we are going to get text overflow.",
        location:"77 Massachusetts Avenue, Cambridge, MA",
        castingStartDate:"April 8",
        castingEndDate:"May 5, 2016",
        productionDate:"July 26, 2016",
        roles: ["Benvolio", "Capulet","Count Paris","Juliet", "King", "Lady Capulet","Lady Montague","Mercutio", "Montague", "Prince Escalus", "Romeo","Rosaline","Tybalt"],
        applicantData: [
            {roleTitle:"Benvolio", applicants:[
            ]},
            {roleTitle:"Capulet", applicants:[
                {name:"Cornell Arnwine", status:"p"},
                {name:"Donovan Ogilvie", status:"p"},
                {name:"Sherrie Mukai", status:"p"},
            ]},
            {roleTitle:"Juliet", applicants:[
                {name:"Kristin Mullaney", status:"p"},
                {name:"Lorinda Donald", status:"p"},
                {name:"Debbra Lofgren", status:"p"},
                {name:"Mui Scarbrough", status:"p"}
            ]},
            {roleTitle:"King", applicants:[
                {name:"Jimmy Kays", status:"p"},
                {name: "Shelby Greenly", status:"p"},
                {name: "Adan Worrell", status: "p"}
            ]},
            {roleTitle:"Romeo", applicants:[
                {name:"Monte Pan", status:"p"},
                {name: "Fausto Prager", status:"p"},
                {name: "Irvin Gildersleeve", status: "p"}
            ]},
        ]};
    
    $scope.findTalent = function() {
        
        $location.path('/talentsearch');
        
    }
    
    $scope.addRole = function() {
        
        $rootScope.noCastingCancel = true;
        $rootScope.roleBeingEdited = undefined;
        
        while(angular.element(document).find('md-dialog').length > 0) {
            $mdDialog.cancel();
        }
        
        $mdDialog.show({
          controller: 'addRoleController',
          templateUrl: 'new-role.html',
          ariaLabel: "Add Role",
          parent: angular.element('#pag-wrapper'),
          clickOutsideToClose:true,
          //fullscreen: 'useFullScreen'
        })
        .then(function(answer) {
          console.log(answer);
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
        
        while(angular.element(document).find('md-dialog').length > 1) {
            $mdDialog.cancel();
        }
        
    }
    
    $scope.editRole = function(index) {
        
        $rootScope.noCastingCancel = true;
        
        $rootScope.roleBeingEdited = $rootScope.roles[index];
        $rootScope.editingRole = true;
        
        $rootScope.roleBeingEditedIndex = index;
        
        while(angular.element(document).find('md-dialog').length > 0) {
            $mdDialog.cancel();
        }
        
        $mdDialog.show({
          controller: 'addRoleController',
          templateUrl: 'new-role.html',
          ariaLabel: "Add Role",
          parent: angular.element('#pag-wrapper'),
          clickOutsideToClose:true,
          //fullscreen: 'useFullScreen'
        })
        .then(function(answer) {
          console.log(answer);
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
        
        while(angular.element(document).find('md-dialog').length > 1) {
            $mdDialog.cancel();
        }
        
    };
    
});

onecastApp.controller('mainActorController', function($scope, $rootScope, $window, $mdDialog, $location) {
    $rootScope.pageTitle = "OneCast";
    $scope.primary = 'pink';
    $("#create-casting").hide();
    $("#create-button").hide();
    
    $rootScope.newOption = "New What?";
    $rootScope.homeUrl = "#actorhome";
    $rootScope.userIcon = "fa-user";
    $rootScope.newUrl = "#actorhome";
    $rootScope.searchUrl = "#productionsearch";
    $rootScope.romeoUrl = "#romeojuliet";
    $rootScope.actor = true;
    
    console.log($rootScope.applied);
    
    if($rootScope.applied) {
        $('#rom-jul-link').show();
        $location.path("/summary");
    } else {
        $('#rom-jul-link').hide();
    }
    
});

onecastApp.controller('mainDirectorController', function($scope, $rootScope, $window, $mdDialog, $location) {
    $rootScope.pageTitle = "OneCast";
    $scope.primary = 'pink';
    $rootScope.newOption = "New Casting";
    $rootScope.homeUrl = "#directorhome";
    $rootScope.userIcon = "fa-film";
    $rootScope.newUrl = "#directorcreate";
    $rootScope.searchUrl = "#talentsearch";
    $rootScope.romeoUrl = "#romeojulietdirect";
    $rootScope.actor = false;
    
    $("#create-casting").show();
    $("#create-button").show();
    
    $rootScope.roles = [];
    
    console.log($rootScope.created);
    
    if($rootScope.created) {
        $('#rom-jul-link').show();
        $location.path("/summary");
    } else {
        $('#rom-jul-link').hide();
    }
    
    $(function(){

        $(".create-button").on("click",function(){
            
            $rootScope.noCastingCancel = false;
            $rootScope.roleBeingEdited = undefined;
            
            while(angular.element(document).find('md-dialog').length > 0) {
                $mdDialog.cancel();
            }

              $mdDialog.show({
                  controller: 'addCastingController',
                  templateUrl: 'new-casting.html',
                  parent: angular.element('#wrapper'),
                  clickOutsideToClose:true,
                  //fullscreen: 'useFullScreen'
                })
                .then(function(answer) {
                  $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                  $scope.status = 'You cancelled the dialog.';
                });
            
            while(angular.element(document).find('md-dialog').length > 1) {
                $mdDialog.cancel();
            }

        });

    });
    
});

onecastApp.controller('actorController', function($scope, $rootScope, $window) {
    $rootScope.pageTitle = "Romeo & Juliet";
    $scope.primary = 'pink';
});

onecastApp.controller('searchController', function($scope, ngTableParams, $rootScope) {
    $rootScope.pageTitle = "OneCast Search";
    $scope.primary = 'purple';
    var data = [{title: "Romeo & Juliet", date: "2016-04-29", location: "Chesapeake, VA", description: "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families."},
                {title: "Les Miserables", date: "2016-04-29", location: "Chesapeake, VA", description: "Les Misérables is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century."},
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
                {title: "Uncle Vanya", date: "2016-11-29", location: "Tampa, FL", description: "Uncle Vanya is a play by the Russian playwright Anton Chekhov. It was first published in 1897 and received its Moscow première in 1899 in a production by the Moscow Art Theatre, under the direction of Konstantin Stanislavski."}];
    
    $scope.isCollapsed=true;
    
    $scope.sortType = 'title';
    $scope.sortReverse = false;
    
//    var today = new Date();
//    today = today.toISOString().substring(0, 10);
//    var next = new Date();
//    next = next.toISOString().substring(0, 10);
    
    $scope.datePicker = {date: {startDate: "", endDate: ""}};
    
    $scope.byDateRange = function (fieldName, minValue, maxValue) {
        
        // reformat the dates
        if(typeof(minValue)!= "string" && minValue != null) {
            minValue = minValue.format("YYYY-MM-DD");

        }
        if(typeof(maxValue)!= "string" && maxValue != null) {
            maxValue = maxValue.format("YYYY-MM-DD");
        }        
        if(minValue != "" && minValue != null) {
            if(maxValue != "" && maxValue != null) {
                if (minValue === undefined) minValue = Number.MIN_VALUE;
                if (maxValue === undefined) maxValue = Number.MAX_VALUE;

                return function predicateFunc(item) {
                    return minValue <= item[fieldName] && item[fieldName] <= maxValue;
                };
            }
        }
        
        
    };

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10000           // count per page
    }, {
        counts: [],
        getData: function($defer, params) {
            $defer.resolve(data);
        }
    });
    
    
}).config(function($mdIconProvider) {
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
   });

onecastApp.controller('directorSearchController', function($scope, ngTableParams, $mdDialog, $rootScope) {
    $rootScope.pageTitle = "OneCast Search";
    $scope.primary = 'pink';
    $scope.invite = function() {
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#pag-wrapper')))
            .clickOutsideToClose(true)
            .title('Actors Invited')
            .textContent('You have invited the selected actors!')
            .ok('Got it!')
        );
    }
    
    $scope.genders = [ {option:"Any", id:""},{option:"Male", id:"m"}, {option:"Female", id:"f"}];
    
    $scope.eyeColors = [{option:"Any", id:""}, {option: "Black", id:"black"}, {option:"Blue", id:"blue"},  {option: "Brown", id:"brown"}, {option: "Hazel", id:"hazel"}, {option: "Grey", id:"grey"}, {option: "Green", id:"green"}];
    
    $scope.hairColors = [{option: "Any", id: ""},{option:"Black", id:"black"}, {option:"Blonde",id:"blonde"}, {option:"Brown", id:"brown"}, {option:"Red",id:"red"}, {option:"Grey",id:"grey"},  {option:"White", id:"white"}, {option:"Auburn", id:"auburn"},{option:"Salt and Pepper", id:"saltandpepper"}];
    
    $scope.buildTypes = [{option: "Any", id: ""},{option:"Slim", id:"slim"}, {option:"Medium",id:"medium"}, {option:"Muscular",id:"muscular"}, {option:"Large", id:"large"}, {option:"Very Large", id:"verylarge"}]
    
    $scope.actors = [
                {name: "Twila Harman", location: "Chesapeake, VA", age: "43", height: "6'3\"", weight: "", gender:"f", haircolor: "black", build: "medium", eyecolor: "black",  description: "son to Montague", image:"../public/images/twila_harman.jpg", selected: false},
                {name: "Ming Correll", location: "Newark, NJ", age: "38", height: "5'7\"", weight: "", gender:"f", haircolor: "brown", build: "slim", eyecolor: "hazel",description: "daughter to Capulet", image:"../public/images/ming_correll.jpg", selected: false},
                {name: "Jerrold Mercier", location: "Detroit, MI", age: "46", height: "6'2\"", weight: "", gender:"m", haircolor: "brown", build: "muscular", eyecolor: "green",description: "kinsman to the prince, and friend to Romeo", image: "../public/images/jerrold_mercier.jpg", selected: false},
                {name: "Naoma Wayland", location: "Dallas, TX", age: "26", height: "5'5\"", weight: "", gender:"f", haircolor: "brown", build: "slim", eyecolor: "green",description: "nephew to Lady Capulet", image:"../public/images/naoma_wayland.jpg", selected: false},
                {name: "Emiko Swanberg", location: "Honolulu, HI", age: "32", height: "5'7\"", weight: "", gender:"f", haircolor: "brown", build: "slim", eyecolor: "brown",description: "Nurse to Juliet", image:"../public/images/emiko_swanberg.jpg", selected: false},
                {name: "Gena Whitehill", location: "Albuquerque, NM", age: "30", height: "5'3\"", weight: "", gender:"f", haircolor: "blonde", build: "slim", eyecolor: "green",description: "Franciscan", image:"../public/images/gena_whitehill.jpg", selected: false},
                {name: "Lourie Faires", location: "Sacramento, CA", age: "56", height: "5'1\"", weight: "", gender:"f", haircolor: "black", build: "large", eyecolor: "black",description: "head of Capulet household", image:"../public/images/lourie_faires.jpg", selected: false},
                {name: "Deirdre Vick", location: "Pittsburgh, PA", age: "32", height: "6'2\"", weight: "", gender:"m", haircolor: "brown", build: "large", eyecolor: "brown",description: "a young nobleman", image:"../public/images/deirdre_vick.jpg", selected: false},
                {name: "Claretta Conley", location: "Fort Worth, TX", age: "32", height: "5'6\"", weight: "", gender:"f", haircolor: "brown", build: "slim", eyecolor: "green",description: "nephew to Montague, and friend to Romeo", image:"../public/images/claretta_conley.jpg", selected: false},
                {name: "Vada Blaine", location: "Aurora, CO", age: "48", height: "", weight: "5'6\"", gender:"m", haircolor: "brown", build: "medium", eyecolor: "green",description: "wife to Capulet", image:"../public/images/vada_blaine.jpg", selected: false},
                {name: "David Horrocks", location: "Oklahoma City, OK", age: "49", height: "6'1\"", weight: "", gender:"m", haircolor: "brown", build: "n/a", eyecolor: "brown",description: "head of Montague household", image:"../public/images/david_horrocks.jpg", selected: false},
                {name: "Loise Delk", location: "Virginia Beach, VA", age: "48", height: "5'7\"", weight: "", gender:"f", haircolor: "blonde", build: "slim", eyecolor: "blue",description: "servant to Romeo", image:"../public/images/loise_delk.jpg", selected: false},
                {name: "Olin Cotnoir", location: "Toledo, OH", age: "39", height: "6'6\"", weight: "", gender:"m", haircolor: "brown", build: "muscular", eyecolor: "blue",description: "servant to Juliet's nurse", image:"../public/images/olin_cotnoir.jpg", selected: false},
                {name: "Jon Griner", location: "Memphis, TN", age: "26", height: "6'9\"", weight: "", gender:"m", haircolor: "brown", build: "muscular", eyecolor: "brown",description: "servant to Montague", image:"../public/images/jon_griner.jpg", selected: false},
                {name: "Christinia Guse", location: "Tampa, FL", age: "21", height: "5'5\"", weight: "", gender:"f", haircolor: "brown", build: "slim", eyecolor: "black",description: "servant to Capulet", image:"../public/images/christinia_guse.jpg", selected: false}];
    
    
    $scope.sortType = 'title';
    $scope.sortReverse = false;
    
    $scope.ageRange = {min: 0, max: 100};
    
    $scope.slider = {
        minValue: 10,
        maxValue: 90,
        options: {
            floor: 15,
            ceil: 90,
            step: 1
        }
    };
    
    // function to determine if any actors have been selected
    
    $scope.notSelected = true;
    $scope.selected = false;
    $scope.anySelected = function () {
        setTimeout(func, 0);
        function func() {
            done = false;
            for(i in $scope.actors) {
                actor = $scope.actors[i];
                if(actor['selected']) {
                    $scope.selected = true;
                    $scope.notSelected = false;
                    done = true;
                }
            }
            if(!done) {
                $scope.slected = false;
                $scope.notSelected = true;
            }
        }
        
    }
    
    $scope.byAgeRange = function (fieldName, minValue, maxValue) {
        if (minValue === undefined) minValue = Number.MIN_VALUE;
        if (maxValue === undefined) maxValue = Number.MAX_VALUE;

        return function predicateFunc(item) {
            return minValue <= item[fieldName] && item[fieldName] <= maxValue;
        };
    };
    


//    $scope.tableParams = new ngTableParams({
//        page: 1,            // show first page
//        count: 10000           // count per page
//    }, {
//        counts: [],
//        getData: function($defer, params) {
//            $defer.resolve(data);
//        }
//    });
    
    
});

onecastApp.controller('actorProfileController', function($scope, $mdDialog, $rootScope) {
    
    console.log("yay, actor profile!");
    
    $scope.actor = {name: "David Horrocks", location: "Oklahoma City, OK", age: "49", height: "6'1\"", weight: "", gender:"m", haircolor: "brown", build: "n/a", eyecolor: "brown",description: "head of Montague household", image:"../public/images/david_horrocks.jpg", selected: false}
    
});

onecastApp.controller('productionController', function($scope, $mdDialog, $rootScope) {
    $rootScope.pageTitle = "OneCast Apply";
    $scope.primary = 'pink';
    $(function(){

        $("#apply-button").on("click",function(){
            
            while(angular.element(document).find('md-dialog').length > 0) {
                $mdDialog.cancel();
            }

              $mdDialog.show({
                  controller: 'applyTimeController',
                  templateUrl: 'actor-apply-cal.html',
                  ariaLabel: "Select Audition Slot",
                  parent: angular.element('#pag-wrapper'),
                  clickOutsideToClose:true,
                  onComplete: function(){
                    setTimeout(function(){
                      console.log("Hello!");
                      console.log($(".fc-today-button").click());
                    }, 0);
                  }
                });
            
            while(angular.element(document).find('md-dialog').length > 1) {
                $mdDialog.cancel();
            }

        });

    });
    
    $scope.roles = [{name: "Romeo", description: "son to Montague", selected: false},
                {name: "Juliet", description: "daughter to Capulet", selected: false},
                {name: "Mercutio",description: "kinsman to the prince, and friend to Romeo"},
                {name: "Tybalt", description: "nephew to Lady Capulet", selected: false},
                {name: "The Nurse", description: "Nurse to Juliet", selected: false},
                {name: "Friar Laurence", description: "Franciscan", selected: false},
                {name: "Capulet", description: "head of Capulet household", selected: false},
                {name: "Paris", description: "a young nobleman", selected: false},
                {name: "Benvolio",  description: "nephew to Montague, and friend to Romeo"},
                {name: "Lady Capulet", description: "wife to Capulet", selected: false},
                {name: "Montague", description: "head of Montague household", selected: false},
                {name: "Balthasar", description: "servant to Romeo", selected: false},
                {name: "Peter", description: "servant to Juliet's nurse", selected: false},
                {name: "Abraham", description: "servant to Montague", selected: false},
                {name: "Sampson", description: "servant to Capulet", selected: false},
                {name: "Gregory", description: "servant to Capulet", selected: false}];
    
     // function to determine if any roles have been selected
    
    $scope.notSelected = true;
    $scope.selected = false;
    $scope.anySelected = function () {
        setTimeout(func, 0);
        function func() {
            done = false;
            for(i in $scope.roles) {
                role = $scope.roles[i];
                if(role['selected']) {
                    $scope.selected = true;
                    $scope.notSelected = false;
                    done = true;
                }
            }
            if(!done) {
                $scope.selected = false;
                $scope.notSelected = true;
            }
        }
        
    }
    
    
});

onecastApp.controller('actorPageController', function($scope, $rootScope) {
    $rootScope.pageTitle = "Production Overview";
    $scope.primary = 'pink';
    $scope.roles = [{name: "Romeo", description: "son to Montague", status: "accepted"},
                {name: "Juliet", description: "daughter to Capulet", status: "applied"},
                {name: "Mercutio",description: "kinsman to the prince, and friend to Romeo", status: "applied"},
                {name: "Tybalt", description: "nephew to Lady Capulet", status: "applied"},
                {name: "The Nurse", description: "Nurse to Juliet", status: "applied"},
                {name: "Friar Laurence", description: "Franciscan", status: "rejected"},
                {name: "Capulet", description: "head of Capulet household", status: "rejected"},
                {name: "Paris", description: "a young nobleman", status: "rejected"},
                {name: "Benvolio",  description: "nephew to Montague, and friend to Romeo", status: "rejected"},
                {name: "Lady Capulet", description: "wife to Capulet", status: "rejected"},
                {name: "Montague", description: "head of Montague household", status: "rejected"},
                {name: "Balthasar", description: "servant to Romeo", status: "applied"},
                {name: "Peter", description: "servant to Juliet's nurse", status: "applied"},
                {name: "Abraham", description: "servant to Montague", status: "rejected"},
                {name: "Sampson", description: "servant to Capulet", status: "backup"},
                {name: "Gregory", description: "servant to Capulet", status: "backup"}];
});

onecastApp.controller('applyTimeController', function($scope, $rootScope, $mdDialog, $location) {
    $scope.primary = 'pink';
    $scope.cancel = function() {
        $mdDialog.cancel();
        //$(".create-button").click();
    };
    
    $scope.ok = function() {
        console.log("Setting to applied");
        $rootScope.applied = true;
        $('#rom-jul-link').show();
        $location.path('/summary');
        $mdDialog.cancel();
    }
    
});

onecastApp.controller('applyTimeControllerDirector', function($scope, $rootScope, $mdDialog, $location) {
    $scope.primary = 'pink';
        $('#calendar').fullCalendar({
            // put your options and callbacks here
            header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
            },
            weekends: false, // will hide Saturdays and Sundays
            defaultView: 'agendaWeek',
            viewDisplay: resizeCalendar,
            firstHour: (new Date()).getHours(),
            minTime: "07:00:00",
            maxTime: "24:00:00",
            slotDuration: "00:15:00",
            allDaySlot: false,
            timezone: "local",
            fixedWeekCount: false, // makes calendar just display the weeks in that month
            height: "auto",
            selectable: true,
    //        selectHelper: true,
            select: function (start, end, jsEvent, view) {
                $('#calendar').fullCalendar('addEventSource', [{
                    start: start,
                    end: end,
                    rendering: 'background',
                    block: true,
                }, ]);
                $("#calendar").fullCalendar("unselect");
            },
            selectOverlap: function(event) {
                return ! event.block;
            },
            editable: true, //for drag and drop
        });
    
        function resizeCalendar() {
            var currentView = $('#calendar').fullCalendar('getView');
            if(currentView.name === 'agendaWeek' || currentView.name === 'agendaDay') {
                currentView.setHeight(9999);
            }
            $('#calendar').fullCalendar('option', 'height', $('#calendar_container').outerHeight()*0.94);
        }
    
        $(".fc-today-button").click();
    
    $scope.cancel = function() {
        
         $mdDialog.cancel();

          $mdDialog.show({
              controller: 'addCastingController',
              templateUrl: 'new-casting.html',
              parent: angular.element('#wrapper'),
              clickOutsideToClose:true,
              //fullscreen: 'useFullScreen'
            })
            .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              $scope.status = 'You cancelled the dialog.';
            });

            while(angular.element(document).find('md-dialog').length > 1) {
                $mdDialog.cancel();
            }
        
    };
    
    $scope.ok = function() {
        
         $mdDialog.cancel();

          $mdDialog.show({
              controller: 'addCastingController',
              templateUrl: 'new-casting.html',
              parent: angular.element('#wrapper'),
              clickOutsideToClose:true,
              //fullscreen: 'useFullScreen'
            })
            .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              $scope.status = 'You cancelled the dialog.';
            });

            while(angular.element(document).find('md-dialog').length > 1) {
                $mdDialog.cancel();
            }
        
    }
    
});

//$scope, ngTableParams, $mdDialog, $rootScope

onecastApp.controller('addRoleController', function($scope, $rootScope, $mdDialog) {
    $scope.primary = 'pink';
    
    $scope.genders = [ {option:"Any", id:"n"},{option:"Male", id:"m"}, {option:"Female", id:"f"}];
    
    $scope.ageRange = {min: 0, max: 100};
    
    $scope.slider = {
        minValue: 10,
        maxValue: 90,
        options: {
            floor: 15,
            ceil: 90,
            step: 1
        }
    };
    $scope.byAgeRange = function (fieldName, minValue, maxValue) {
        if (minValue === undefined) minValue = Number.MIN_VALUE;
        if (maxValue === undefined) maxValue = Number.MAX_VALUE;

        return function predicateFunc(item) {
            return minValue <= item[fieldName] && item[fieldName] <= maxValue;
        };
    };
    
    $scope.add = function() {
        
          var role = {
            name: $scope.roleName,
            description: $scope.roleDescription,
            gender: $scope.roleGender,
            ageMin: $scope.ageRange.min,
            ageMax: $scope.ageRange.max
          };
          
          if($rootScope.roleBeingEdited) {
              $rootScope.roles[$rootScope.roleBeingEditedIndex] = role;
          } else {
              $rootScope.roles.push(role);
          }
        
          console.log($rootScope.roles);
        
          $mdDialog.cancel();
        
          if(!$rootScope.noCastingCancel) {
              $mdDialog.show({
              controller: 'addCastingController',
              templateUrl: 'new-casting.html',
              parent: angular.element('#wrapper'),
              clickOutsideToClose:true,
              //fullscreen: 'useFullScreen'
            })
            .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              $scope.status = 'You cancelled the dialog.';
            });

            while(angular.element(document).find('md-dialog').length > 1) {
                $mdDialog.cancel();
            }
          }
    };
    
    $scope.cancel = function() {
        
          $mdDialog.cancel();
        
          if(!$rootScope.noCastingCancel) {
              $mdDialog.show({
              controller: 'addCastingController',
              templateUrl: 'new-casting.html',
              parent: angular.element('#wrapper'),
              clickOutsideToClose:true,
              //fullscreen: 'useFullScreen'
            })
            .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              $scope.status = 'You cancelled the dialog.';
            });

            while(angular.element(document).find('md-dialog').length > 1) {
                $mdDialog.cancel();
            }
          }
    };
    
    if($rootScope.roleBeingEdited) {
        
        $scope.roleName = $rootScope.roleBeingEdited.name;
        $scope.roleGender = $rootScope.roleBeingEdited.gender;
        $scope.roleDescription = $rootScope.roleBeingEdited.description;
        $scope.ageRange.min = $rootScope.roleBeingEdited.ageMin;
        $scope.ageRange.max = $rootScope.roleBeingEdited.ageMax;
        
    }
    
    $scope.roles = $rootScope.roles;
    
    if($rootScope.editingRole) {
        $scope.mode = "Save";
    } else {
        $scope.mode = "Add";
    }
    
});

onecastApp.controller('addCastingController', function($scope, $rootScope, $mdDialog, $location) {
    $scope.primary = 'pink';
    console.log("Binded");
    
//    $scope.myDate = new Date();
    var currentDate = new Date();
    $scope.minDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
    );
  
    $scope.editRole = function(index) {
        
        $rootScope.noCastingCancel = false;
        $rootScope.editingRole = true;
        
        $rootScope.roleBeingEdited = $rootScope.roles[index];
        $rootScope.roleBeingEditedIndex = index;
        
        /*while(angular.element(document).find('md-dialog').length > 0) {
            $mdDialog.cancel();
        }*/
        
        $mdDialog.show({
          controller: 'addRoleController',
          templateUrl: 'new-role.html',
          ariaLabel: "Add Role",
          parent: angular.element('#pag-wrapper'),
          clickOutsideToClose:true,
          //fullscreen: 'useFullScreen'
        })
        .then(function(answer) {
          console.log(answer);
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
        
        /*while(angular.element(document).find('md-dialog').length > 1) {
            $mdDialog.cancel();
        }*/
        
    };
    
    $scope.deleteRole = function(index) {
        $rootScope.roles.splice(index, 1);
    }
    
    $scope.addRole = function() {
        
        $rootScope.editingRole = false;
        $rootScope.roleBeingEditedIndex = -1;
        $rootScope.roleBeingEdited = undefined;
        
        $mdDialog.cancel();
        
        $mdDialog.show({
          controller: 'addRoleController',
          templateUrl: 'new-role.html',
          ariaLabel: "Add Role",
          parent: angular.element('#pag-wrapper'),
          clickOutsideToClose:true,
          //fullscreen: 'useFullScreen'
        })
        .then(function(answer) {
          console.log(answer);
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
        
    };
    
    $scope.addTimes = function() {
        
        $mdDialog.cancel();
        
        $mdDialog.show({
          controller: 'applyTimeControllerDirector',
          templateUrl: 'director-times-cal.html',
          ariaLabel: "Choose Audition Times",
          parent: angular.element('#pag-wrapper'),
          clickOutsideToClose:true,
          onComplete: function(){
            setTimeout(function(){
              console.log("Hello!");
              console.log($(".fc-today-button").click());
            }, 0);
          }
        });
        
    };
    
    $scope.save = function() {
        $mdDialog.cancel();
        $rootScope.created = true;
        $('#rom-jul-link').show();
        $location.path('/romeojulietdirect');
    }
    
    $scope.cancel = function() {
        $mdDialog.cancel();
    }
    
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

onecastApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('pink');
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
