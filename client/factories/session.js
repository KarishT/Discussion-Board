app.factory('sessionFactory', function($http, $location){
  factory= {};
  factory.addUser = function(user){
    $http.post('/user/add', user).success(function(output){
      if(output.status == true){
        $location.url('/dashboard');
      }
    })
  };

  factory.checkSess = function(cb){
    $http.get('/user/checkSess').success(function(data){
      cb(data);
      if(!data){
        $location.url('/');
      }
    })
  };

  factory.getCategory = function(cb){
    $http.get('/allcats').success(function(output){
      cb(output);
    })
  };

  

  return factory;
})
