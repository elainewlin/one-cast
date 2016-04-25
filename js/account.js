var accountApp = angular.module('accountApp', ['ngMaterial', 'ngMessages']);

accountApp.controller('formController', function($scope, $mdDialog) {
    $scope.nameError = "Valid name required";
    $scope.eyeColors = ["Blue", "Brown", "Hazel", "Other"];
    $scope.hairColors = ["Brunette", "Blonde", "Red", "White", "Other"];
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