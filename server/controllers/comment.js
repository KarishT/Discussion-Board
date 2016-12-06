var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = (function(){
  return{
    addComment: function(req,res){
      Post.findOne({_id:req.body._post}, function(err, post){
        var comment = new Comment(req.body);
        comment._user = req.session.user;
        console.log(comment, "com");
        comment.save(function(err, data){
          post._com.push(comment);
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
    },
    }


})();
