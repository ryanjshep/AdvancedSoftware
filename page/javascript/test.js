(function(){

var app = angular.module('store', [ ]);

app.controller('StoreController', function($scope, $http){
  //TODO: We don't need 2 List, We just Need 1 List
  //      we add a variable to that 1 list 
  //      called loaded
  //
  //      loaded can only be true or false
  //      
  //      there are 2 columns on the page
  //      the left shows a list of variables that are not loaded
  //      the right vice versa
  //
  $scope.carList = tmpCarList;
  $scope.carList.sort(function(a, b){
    return a.name - b.name;
  });

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
  $scope.sortList= function(){
    console.log("I am sorting");
    console.log($scope.carList);
    $scope.carList.sort();
    console.log($scope.carList);
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
  id: 7,
  date: "9/9/99"
},
{
  name: "Red Car",
  id: 9,
  date: "5/9/99"
},
{
  name: "Orange Car",
  id: 2,
  date: "1/9/99"
},
{
  name: "Purple Car",
  id: 20,
  date: "6/20/49"
},
{
  name: "Teal Car",
  id: 50,
  date: "6/1/05"
}
];


})();


