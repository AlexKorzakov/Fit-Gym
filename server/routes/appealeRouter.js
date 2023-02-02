const Router = require('express');
const router = new Router();
const appealeController = require('../controllers/appealeController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/make', appealeController.makeAppeale);
router.get('/get',checkRoleMiddleware("ADMIN"), appealeController.getAll);
router.post('/delete', checkRoleMiddleware("ADMIN"), appealeController.deleteAppeale);

module.exports = router;