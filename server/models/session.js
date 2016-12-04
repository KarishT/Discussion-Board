var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  user : String,
  _topic: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
}, {timestamps:true});

mongoose.model('Category',
               new mongoose.Schema({id: Number, catname: String}),
               'categories');

mongoose.model('User', UserSchema);
