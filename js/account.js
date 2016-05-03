var accountApp = angular.module('accountApp', ['ngMaterial', 'ngMessages']);

accountApp.controller('formController', function($scope, $mdDialog, $location) {
    $scope.nameError = "Valid name required";
    $scope.eyeColors = ["Blue", "Brown", "Hazel", "Grey", "Green", "Other"];
    $scope.hairColors = ["Black", "Blonde", "Brown", "Red", "Grey", "White", "Auburn", "Salt and Pepper", "Other"];
    $scope.builds = ["Slim", "Medium", "Muscular", "Large", "Very Large"];
    //console.log($ngMessages);
    
    $scope.directorFinish = function() {
        
        localStorage.setItem("directorName", $scope.director.firstName);
        window.location = "index.html#directorhome";
        
    };
    
    $scope.actorFinishOne = function() {
        console.log($scope.account);
        localStorage.setItem("actorBasics", JSON.stringify($scope.account));
        window.location = "actor-account-creation-2.html";
    }
    
    $scope.finishActor = function() {
        console.log($scope.account);
        localStorage.setItem("actorComplex", JSON.stringify($scope.account));
        window.location = "index.html#actorhome";
    }
    
    $(".number-input").keydown(function(e) {
        if(e.keyCode == 189 || e.keyCode == 187) {
            return false;
        }
    });
    
});

accountApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('purple');
});

document.getElementById('file').onchange = function() {
    document.getElementById('uploadedNotif').className = "ng-show";
};