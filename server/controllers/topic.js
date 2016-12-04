var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = (function(){
  return{
    addTopic: function(req,res){
      var topic = new Topic(req.body);
      console.log(req.session.user);
      topic._user = req.session.user;
      topic.save(function(err, topic){
        if(err){
          console.log(err);
        }
        else {
          res.json(topic);
        }
      })
    },

    index: function(req,res){
      Topic.find({}).populate('_user').exec(function(err, data){
        if(err){
          console.log(err);
        }
        else {
          res.json(data);
        }
      })
    },

    oneTopic: function(req,res){
      console.log(req.params);
      Topic.findOne({_id: req.params.id}, function(err, data){
        if(err){
          console.log(err);
        }
        else {
          res.json(data);
        }
      })
    },

  }
})();
