var mongoose = require('mongoose');
var User = mongoose.model('User');
var Category = mongoose.model('Category');

module.exports= (function(){
  return{
    addUser: function(req,res){
      User.findOne({user: req.body.user}, function(err, user){
        if(!user){
          var user = new User(req.body);
          user.save(function(err, user){
            if(err){
              console.log(err);
            }
            else {
              req.session.user = user;
              req.session.save();
              res.json({data: req.session.user, status: true});
            }
          })
        }

        else{
          req.session.user = user;
          req.session.save();
          res.json({data: req.session.user, status: true});

        }
      })

    },

    checkSess: function(req,res){
      if(req.session.user){
        res.json(req.session.user);
      }
      else {
        res.send(null);
      }
    },

    logout: function(req,res){
      req.session.destroy()
			res.redirect('/')
    },


    getCategory: function(req,res){
      Category.find({}, function(err, data){
        if(err){
          console.log(err);
        }
        else {
          res.json(data);
        }
      })
    },

    userDetails: function(req,res){
      User.findOne({_id: req.params.id}, function(err, data){
        if(err){
          console.log(err);
        }
        else {
          console.log(data, "userinfo");
          res.json(data);
        }
      })
    },

  }
})();
