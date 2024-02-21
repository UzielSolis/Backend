const jwt = require('jsonwebtoken');
const User = require('../models/user.models');
const ResponseStatus = require('../utils/response-status');
const hashPassword = require('../utils/hash-password');

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

    signup(req, res) {
        const data = {
            name : req.body.name,
            email : req.body.email,
            password : hashPassword(req.body.password)
        }

        User.create(data).then(response => {
            res.send({
                name: response.name,
                email: response.email
            });
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to create user');
        })
    }

    login(req, res) {
        const data = {
            email : req.body.email,
            password : hashPassword(req.body.password)
        }

        User.findOne(data).then(response => {
            if(response) {
                const data = {
                    id : response._id,
                    name : response.name,
                    email : response.email,
                    role : response.role
                }

                const token = jwt.sign(data, process.env.TOKEN_KEY);
                res.send({
                    token
                })

            } else {
                res.status(ResponseStatus.UNAUTHORIZED).send('failed to login');
            }
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to login');
        })
    }
}

module.exports = new UsersController();