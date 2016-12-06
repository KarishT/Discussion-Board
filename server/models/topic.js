var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
  topic: String,
  descrip: String,
  catname: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _post: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  postsCount: {type:Number, default: 0},
},{timestamps:true});

mongoose.model('Topic', TopicSchema);
