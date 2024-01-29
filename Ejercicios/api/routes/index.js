const router = require('express').Router();
const authRouter = require('./auth');
const userRouter = require('./users');

router.use('/auth', authRouter);
router.use('/users', userRouter);

router.get('', (req, res) => {
    res.send('router works');
})

module.exports = router;