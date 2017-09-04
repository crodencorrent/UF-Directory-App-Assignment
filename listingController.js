angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.selectedIndex = 0;
    $scope.toAdd = {
            code: "AAF", 
            name: "Academic Advisement - Farrior Hall", 
            //"coordinates": {
               // "latitude": 29.6502323, 
               // "longitude": -82.34563860000002};
              };

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
    var x = document.getElementById("addFrm");
    var text = "";
    var i;
    $scope.toAdd.name= x.elements[0].value;
    $scope.toAdd.code = x.elements[1].value;
    $scope.listings.push($scope.toAdd);
    };
    
    $scope.deleteListing = function(index) {
      $scope.listings.splice($scope.selectedIndex,1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
      $scope.selectedIndex = index;
    };
  }
]);