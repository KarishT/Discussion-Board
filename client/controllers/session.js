app.controller('sessionController', function($scope, sessionFactory, $route){
  $scope.categories = [];



  $scope.addUser = function(){
    sessionFactory.addUser($scope.newUser)
  };

  sessionFactory.checkSess(function(data){
		$scope.sessionUsers = data;
	});

  sessionFactory.getCategory(function(data){
    $scope.categories = data;
  });






});
