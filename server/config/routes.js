var user = require('./../controllers/session.js');
var topic = require('./../controllers/topic.js');

module.exports = function(app){
    app.post('/user/add', function(req,res){
      user.addUser(req,res);

    });

    app.get('/user/checkSess', function(req,res){
      user.checkSess(req,res);
    });

    app.get('/logout', function(req, res){
  		user.logout(req, res)
  	});

    app.get('/allcats', function(req,res){
      user.getCategory(req,res);

    });

    app.post('/topic/add', function(req,res){
      topic.addTopic(req,res);
    });

    app.get('/topic/all', function(req,res){
      topic.index(req,res);
    });

    app.get('/topic/one/:id', function(req,res){
      topic.oneTopic(req,res);
    });

};
