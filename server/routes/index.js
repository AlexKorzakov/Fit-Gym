const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const trainerRouter = require('./trainerRouter');
const scheduleRouter = require('./scheduleRouter');
const appealeRouter = require('./appealeRouter');

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/trainer', trainerRouter);
router.use('/schedule', scheduleRouter);
router.use('/appeale', appealeRouter);
// router.use('/user', );
// router.use('/user', );
// router.use('/user', );


module.exports = router;