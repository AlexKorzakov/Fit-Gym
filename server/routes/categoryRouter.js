const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/',authMiddleware, categoryController.getAll);

module.exports = router;