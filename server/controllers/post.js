var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports = (function(){
  return{
    addPost: function(req,res){
      var post = new Post(req.body);
      post._user= req.session.user;
      post.save(function(err, post){
        if(err){
          console.log(err);
        }
        else {
          res.json(post);
        }
      })
    },

    index: function(req,res){
      Post.find({_topic: req.params.id})
      .populate('_user')
      .populate('_topic')
      .populate('_com')
      .exec(function(err, data){
        Post.populate(data, {path:'_com._user',model:'User'}, function(err, data){
          if(err){
            console.log(err);
          }
          else {
            res.json(data);
          }

        })

      })
    },


  }

})();
