var accountApp = angular.module('accountApp', ['ngMaterial', 'ngMessages']);

accountApp.controller('formController', function($scope, $mdDialog) {
    $scope.nameError = "Valid name required";
    $scope.eyeColors = ["Blue", "Brown", "Hazel", "Grey", "Green", "Other"];
    $scope.hairColors = ["Black", "Blonde", "Brown", "Red", "Grey", "White", "Auburn", "Salt and Pepper", "Other"];
    $scope.builds = ["Slim", "Medium", "Muscular", "Large", "Very Large"];
    //console.log($ngMessages);
    
    
});

accountApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('purple');
});

document.getElementById('file').onchange = function() {
    document.getElementById('uploadedNotif').className = "ng-show";
};