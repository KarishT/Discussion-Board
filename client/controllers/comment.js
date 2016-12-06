app.controller('commentController', function($scope,$route, $routeParams ,$location, commentFactory){

  $scope.addComment = function(id){
    $scope.newComment._post = id;
    console.log($scope.newComment, "cont");
    commentFactory.addComment($scope.newComment);
    $route.reload();
  };



})
