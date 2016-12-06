var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  post: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  _com: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  upVote: {type: Number, default:0},
  downVote:{type: Number, default:0, min:0},
}, {timestamps: true})

mongoose.model('Post', PostSchema);
