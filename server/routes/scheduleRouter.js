const Router = require('express');
const router = new Router();
const scheduleController = require('../controllers/scheduleController');
const checkAdmin = require('../middleware/checkRoleMiddleware');

router.post('/makeRecord', checkAdmin("ADMIN"), scheduleController.makeRecord);
router.get('/getRecord', scheduleController.getRecord);
router.post('/deleteRecord',checkAdmin("ADMIN"), scheduleController.deleteRecord);

module.exports = router;