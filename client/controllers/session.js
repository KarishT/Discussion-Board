app.controller('sessionController', function($scope, $routeParams,sessionFactory, $route){
  $scope.categories = [];
  $scope.userInfo = [];


  $scope.addUser = function(){
    sessionFactory.addUser($scope.newUser)
  };

  sessionFactory.checkSess(function(data){
		$scope.sessionUsers = data;
	});

  sessionFactory.getCategory(function(data){
    $scope.categories = data;
  });

  if($routeParams.id) {
    sessionFactory.userDetails($routeParams.id, function(data){
      $scope.userInfo = data;
    })
  }





});
