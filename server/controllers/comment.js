var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = (function(){
  return{
    addComment: function(req,res){
    User.findOne({_id: req.session.user}, function(err, user){
      Post.findOne({_id:req.body._post}, function(err, post){
        var comment = new Comment(req.body);
        comment._user = req.session.user;
        comment.save(function(err, data){
          user._com.push(comment);
          post._com.push(comment);
          user.comCount += 1;
          user.save(function(err,data){
            post.save(function(err, data){
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


    }
})();
