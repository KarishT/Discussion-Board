app.controller('postController', function($scope, postFactory,$location, $route, $routeParams){
  $scope.posts = [];

  $scope.addPost = function(id){
    $scope.newPost._topic = id;
    postFactory.addPost($scope.newPost);
    $route.reload();
  };

  if($routeParams.id){
  postFactory.index($routeParams.id, function(data){
    $scope.posts = data;
    console.log(data);
  })
};

})
