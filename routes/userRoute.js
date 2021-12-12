const router = require('express').Router();
const { route } = require('express/lib/router');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.route('/dashboard').get(authMiddleware,authController.dashboard);
router.route('/login').post(authController.login);

module.exports = router;
