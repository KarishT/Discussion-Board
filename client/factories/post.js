app.factory('postFactory', function($http){
  factory= {};
  factory.addPost = function(post){
    $http.post('/add/post', post).success(function(output){

    })
  };

  factory.index = function(id, cb){
    $http.get('/all/post/'+ id).success(function(output){
      cb(output);
    })
  };

  factory.upVote = function(postid){
    $http.get('/upVote/' + postid).success(function(){

    })
  };

  factory.downVote = function(postid){
    $http.get('/downVote/' + postid).success(function(){

    })
  };

  return factory;

})
