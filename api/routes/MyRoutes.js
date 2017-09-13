module.exports = function(app) {
    var act = require('../controllers/MyController');
  
    // noi goi route
    app.route('/Users')
      .get(act.list_all_Users)
      .post(act.create_User);
  
    app.route('/Users/:UserId')
      .get(act.read_User)
      .put(act.update_User)
      .delete(act.delete_User);
  };