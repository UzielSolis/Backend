const ResponseStatus = require('./../utils/response-status');

roles = ['admin', 'user', 'author'];

module.exports = (...role) => {
    return (req, res, next) => {
        if(role.includes(req.user.role)) {
            next();
        } else {
            res.sendStatus(ResponseStatus.UNAUTHORIZED);
        }
    } 
};