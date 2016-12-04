app.factory('topicFactory', function($http, $location){
  factory= {};

  factory.addTopic= function(topic,cb){
    $http.post('/topic/add', topic).success(function(output){
      cb(output.data);
    })
  };

  factory.index = function(cb){
    $http.get('/topic/all').success(function(output){
      cb(output);
    })
  };

  factory.oneTopic = function(idobj, cb){
    $http.get('/topic/one/' + idobj).success(function(output){
      cb(output);
    })
  };



  return factory;



})
