const ResponseStatus = require('./../utils/response-status');

roles = ['admin', 'user', 'author'];

module.exports = (role) => {
    return (req, res, next) => {
        if(req.query.token && req.query.token == '123') {
            req.user = {...authUser};
            next();
        } else {
            res.sendStatus(ResponseStatus.UNAUTHORIZED);
        }
    }
};