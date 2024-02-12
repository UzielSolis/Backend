const router = require('express').Router();
const {getUsers, getUserById} = require('../controllers/users.controllers');
const authMiddleware = require('../middlewares/auth.middleware');
const hasRole = require('../middlewares/role.middleware')

router.use(authMiddleware);
router.get('', hasRole('admin', 'user'), getUsers);
router.get('/:id', getUserById);

module.exports = router;