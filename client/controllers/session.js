app.controller('sessionController', function($scope, sessionFactory, $route){
  $scope.categories = [];



  $scope.addUser = function(){
    sessionFactory.addUser($scope.newUser)
  };

  sessionFactory.checkSess(function(data){
		$scope.sessionUsers = data;
	});

  console.log($scope.sessionUsers);
  sessionFactory.getCategory(function(data){
    $scope.categories = data;
  });






});
