var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  user : String,
  _topic: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  _post:[{type: Schema.Types.ObjectId, ref: 'Post'}],
  _com: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  topicCount: {type:Number, default: 0},
  postCount: {type:Number, default: 0},
  comCount: {type:Number, default: 0},
}, {timestamps:true});

mongoose.model('Category',
               new mongoose.Schema({id: Number, catname: String}),
               'categories');

mongoose.model('User', UserSchema);
