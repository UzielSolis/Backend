const router = require('express').Router();
const path = require('path');
const axios = require('axios');

router.get('', (req, res) => {
    //res.send('api works');
    //const url = path.join(__dirname, '..', 'views', 'index.html');
    //res.sendFile(url);
    res.render('home', {
        title: 'Titulo dinamico'
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        layout: 'main-login'
    });
});

router.get('/tareas', (req, res) => {
    const userId = req.query.user;
    if(userId) {
        const url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
        axios.get(url).then(response => {
                res.render('todos', {
                    userId,
                    todos: response.data
                });
            }).catch();

    } else {
        res.render('todos');
    }
});

module.exports = router;