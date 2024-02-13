const router = require('express').Router();
const authRouter = require('./auth.routes');
const userRouter = require('./users.routes');

router.use('/auth', authRouter);
router.use('/user', userRouter);

router.get('', (req, res) => {
    res.send('router works');
})

module.exports = router;