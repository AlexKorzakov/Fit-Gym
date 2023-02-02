const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

// GUEST routes
router.post('/registration', userController.registration);
// USER routes
router.post('/login', userController.login);
router.put('/reset', authMiddleware, userController.changePassword);
router.post('/auth', authMiddleware, userController.check);
// ADMIN routes
router.get('/admin', checkRoleMiddleware('ADMIN'), userController.check);
router.post('/get', authMiddleware, userController.getOne); // use in USER routes
router.get('/get/:name', checkRoleMiddleware('ADMIN'), userController.getAll); // change to get without body
router.post(
  '/admin/visit',
  checkRoleMiddleware('ADMIN'),
  userController.extendVisit
);
router.post(
  '/admin/offVisit',
  checkRoleMiddleware('ADMIN'),
  userController.offVisit
);
router.post(
  '/admin/trainer',
  checkRoleMiddleware('ADMIN'),
  userController.getPersonalTrainer
);
router.post(
  '/admin/delete',
  checkRoleMiddleware('ADMIN'),
  userController.deleteUser
);
router.post(
  '/admin/changeName',
  checkRoleMiddleware('ADMIN'),
  userController.changeName
);
router.post(
  '/admin/changeDOB',
  checkRoleMiddleware('ADMIN'),
  userController.changeDayOfBirthday
);
router.post(
  '/admin/changeType',
  checkRoleMiddleware('ADMIN'),
  userController.changeType
);

module.exports = router;
