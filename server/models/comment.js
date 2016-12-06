var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  com: String,
  _user:{type: Schema.Types.ObjectId, ref: 'User'},
  _post:{type: Schema.Types.ObjectId, ref: 'Post'},
},{timestamps:true})

mongoose.model('Comment', CommentSchema);
