var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');

module.exports = (function(){
  return{
    addPost: function(req,res){
      User.findOne({_id: req.session.user}, function(err, user){
        Topic.findOne({_id: req.body._topic}, function(err, topic){
          var post = new Post(req.body);
          post._user= req.session.user;
          post.save(function(err, data){
            topic._post.push(post);
            topic.postsCount += 1;
            user._post.push(post);
            user.postCount += 1;

            user.save(function(err, data){
              topic.save(function(err, data){
                if(err){
                  console.log(err);
                }
                else {
                  res.json(data);
                }
              })

            })
          })
        })

      })
    },

    index: function(req,res){
      Post.find({_topic: req.params.id})
      .populate('_user')
      .populate('_topic')
      .populate('_com')
      .populate('_post')
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

    upVote : function(req,res){
      Post.findOne({_id: req.params.id}, function(err, post){
        post.upVote += 1;
        post.save(function(err, data){
          if(err){
            res.json(err);
          }
          else{
            res.json(data);
          }
        })
      })
    },

    downVote : function(req,res){
      Post.findOne({_id: req.params.id}, function(err, post){
        post.downVote += 1;
        post.save(function(err, data){
          if(err){
            res.json(err);
          }
          else{
            res.json(data);
          }
        })
      })
    },


  }

})();
