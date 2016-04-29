var accountApp = angular.module('accountApp', ['ngMaterial', 'ngMessages']);

accountApp.controller('formController', function($scope, $mdDialog) {
    $scope.nameError = "Valid name required";
    $scope.eyeColors = ["Blue", "Brown", "Hazel", "Other"];
    $scope.hairColors = ["Brunette", "Blonde", "Red", "White", "Other"];
    //console.log($ngMessages);
    
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
    
});

accountApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('purple');
});

document.getElementById('file').onchange = function() {
    document.getElementById('uploadedNotif').className = "ng-show";
};