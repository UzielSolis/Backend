const router = require('express').Router();
const path = require('path');

router.get('', (req, res) => {
    //res.send('api works');
    const url = path.join(__dirname, '..', 'views', 'index.html');
    res.sendFile(url);
});

module.exports = router;