var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = (function(){
  return{
    addTopic: function(req,res){
      var topic = new Topic(req.body);
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
      console.log(req.params,"before");
      if(req.params.id === undefined){
      }
      else {


      Topic.findOne({_id: req.params.id}).populate('_user').exec(function(err, data){
        if(err){
          console.log(err,"witheerr");
        }
        else {
          res.json(data);
        }
      })
    }
    },

  }
})();
