const Router = require('express');
const router = new Router();
const trainerController = require('../controllers/trainerController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/',authMiddleware, trainerController.getAll);

module.exports = router;