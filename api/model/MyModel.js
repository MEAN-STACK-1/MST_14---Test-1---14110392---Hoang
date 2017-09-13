var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//tao 1 shema gom 2 thuoc tinh
var UserShema = new Schema({
  name: {type:String},
  age:{type:Number, min:18}  ,
  phone:{type:Number, match: /[0-9]/,min:10 }
});

module.exports = mongoose.model('Users', UserShema);