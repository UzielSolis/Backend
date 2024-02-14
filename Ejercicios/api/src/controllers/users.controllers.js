const User = require('../models/user.models');
const ResponseStatus = require('../utils/response-status')

class UsersController {
    getUsers(req, res) {
        console.log('Quien hizo la petición? ', req.user);
        User.find().then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }

    createUser(req, res) {
        res.send('will create a new user');
    }

    getUserById(req, res) {
        const userId = req.params.id;
        res.send('get user ' + userId);
    }
}

module.exports = new UsersController();