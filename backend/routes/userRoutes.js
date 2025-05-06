const express = require('express');
const router = express.Router();
const {
  createUserMySQL,
  getUsersMySQL,
  getUserMySQL,
  updateUserMySQL,
  deleteUserMySQL,
  createUserMongo,
  getUsersMongo,
  getUserMongo,
  updateUserMongo,
  deleteUserMongo
} = require('../controllers/userController');

router.route('/mysql').post(createUserMySQL).get(getUsersMySQL);
router.route('/mysql/:id').get(getUserMySQL).put(updateUserMySQL).delete(deleteUserMySQL);
router.route('/mongo').post(createUserMongo).get(getUsersMongo);
router.route('/mongo/:id').get(getUserMongo).put(updateUserMongo).delete(deleteUserMongo);

module.exports = router;