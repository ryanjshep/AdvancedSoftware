(function(){

var app = angular.module('store', [ ]);

app.controller('StoreController', function($scope, $http){
  $scope.carList = tmpCarList;

  $scope.loadList = [];
  console.log($scope.carList);

  $scope.listToLoad = function(x){
    console.log("I am Loading", x);
    $scope.loadList.push(x);
    $scope.findAndDelete($scope.carList, x.id);
  }

  $scope.loadToList = function(x){
    console.log("I am removing car ", x, " from load");
    $scope.carList.push(x);
    $scope.findAndDelete($scope.loadList, x.id);
  }

  $scope.findAndDelete = function(array, index){
    for(var i = 0; i < array.length; i++){
      if(array[i].id == index){ 
        array.splice(i, 1);
        return;
      }
    }
  }

});

var gem = {
  name: 'Dodechaechedron',
  price: 2.95,
  description: ' . . . ',
  loaded: false
}

var tmpCarList = [
{
  name: "Blue Car", 
  id: 1,
  date: "9/9/99"
},
{
  name: "Red Car",
  id: 2,
  date: "5/9/99"
},
{
  name: "Orange Car",
  id: 3,
  date: "1/9/99"
},
{
  name: "Purple Car",
  id: 4,
  date: "6/20/49"
},
{
  name: "Teal Car",
  id: 5,
  date: "6/1/05"
}
];


})();


