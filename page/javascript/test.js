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
  $scope.propertyName = '-date';
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

var tmpCarList = [
{
  name: "Blue Car", 
  id: 7,
  date: new Date('1/23/2013')
},
{
  name: "Red Car",
  id: 9,
  date: new Date('5/23/2013')
},
{
  name: "Orange Car",
  id: 2,
  date: new Date('3/23/2013')
},
{
  name: "Purple Car",
  id: 20,
  date: new Date('7/23/2013')
},
{
  name: "Teal Car",
  id: 50,
  date: new Date('6/23/2013')
}
];


})();


