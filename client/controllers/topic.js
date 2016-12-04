app.controller('topicController', function($scope, topicFactory, $route, $routeParams){
  $scope.topics = [];
  $scope.oneTopics = [];

  $scope.addTopic = function(){
    topicFactory.addTopic($scope.newTopic, function(data){
      $scope.topics = data;
      $route.reload();

    })
  };

  topicFactory.index(function(data){
    $scope.topics = data;
  });

  topicFactory.oneTopic($routeParams.id, function(data){
    $scope.oneTopics = data;
  });
  console.log($routeParams);

  })
