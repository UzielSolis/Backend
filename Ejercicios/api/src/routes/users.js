const router = require('express').Router();
const {getUsers, getUserById} = require('./../controllers/users');
const authMiddleware = require('./../middlewares/auth.middleware');

router.use(authMiddleware);
router.get('', hasRole('admin'), getUsers);
router.get('/:id', getUserById);

module.exports = router;