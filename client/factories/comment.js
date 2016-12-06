app.factory('commentFactory', function($http){
  factory = {};

  factory.addComment = function(com){
    console.log(com);
    $http.post('/add/com', com).success(function(output){
    console.log(output, "output");
  })
};

  return factory;
})
