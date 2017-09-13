const mongoose = require('mongoose'),
User = mongoose.model('Users');

//ham lay tat ca user tra ve dang json
exports.list_all_Users = function(req, res) {
    User.find({}, function(err, User) {
    if (err)//neu co loi thi tra ve loi
        res.send(err);
    //neu khong tra ve dang json
    res.json(User);
    });
};
// ham tao user
exports.create_User = function(req, res) {
const new_User = new User(req.body); //
new_User.save(function(err, User) {
  if (err)
    res.send(err);
  res.json(User);
});
};
//ham tim 1 user
exports.read_User = function(req, res) {
User.findById(req.params.UserId, function(err, User) { //req.params.UserID lay id do nguoi dung nhap vao 
  if (err)                                             //dung phuong thuc get
    res.send(err);
  res.json(User);
});
};
//ham update user
//findOneAndUpdate(conditions, update, options, callback) // executes
exports.update_User = function(req, res) {
User.findOneAndUpdate({_id: req.params.UserId}, req.body, {new: true}, function(err, User) {
  if (err)
    res.send(err);
  res.json(User);
});
};
//ham xoa user
exports.delete_User = function(req, res) {
User.remove({
  _id: req.params.UserId
}, function(err, User) {
  if (err)
    res.send(err);
  res.json({ message: 'delete user success' });
});
};

