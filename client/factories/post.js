app.factory('postFactory', function($http){
  factory= {};
  factory.addPost = function(post){
    $http.post('/add/post', post).success(function(output){
      
    })
  };

  factory.index = function(id, cb){
    console.log(id);
    $http.get('/all/post/'+ id).success(function(output){
      cb(output);
    })
  };

  return factory;

})
