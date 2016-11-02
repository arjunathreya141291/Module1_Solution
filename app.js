(function(){


angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){


$scope.items = "";
$scope.customStyle = {};
$scope.checker = function(){
  var numberOfItems = 0;
  var stringOfItems = $scope.items;

if($scope.items !== ""){
  numberOfItems = findNumber(stringOfItems);
}else{
  numberOfItems = 0;
}

  if(numberOfItems !== 0 && numberOfItems <=3){
    $scope.message = "Enjoy!";
    $scope.customStyle.colorClass = "green";
  }else if(numberOfItems > 3){
    $scope.message = "Too much!";
    $scope.customStyle.colorClass = "green";
  } else if(numberOfItems == 0){
    $scope.message = "Please enter data first";
    $scope.customStyle.colorClass = "red";
  }

};

function findNumber(string){
  var num = string.split(",");
  var number = num.length;
  return number;
};

};

})();
