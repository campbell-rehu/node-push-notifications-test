const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const push = require('pushover-notifications');
const $ = require('jquery');

// Define USER_KEY & TOKEN in separate file called keys.js
const KEYS = require('./keys');
const USER_KEY = KEYS.USER_KEY;
const TOKEN = KEYS.TOKEN;

const PORT = 3000 || process.env.PORT;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, '/views'));

const p = new push({
    user: USER_KEY,
    token: TOKEN
});

app.get('/', (req, res) => {
    res.render('index', {message: ''});
});

app.post('/', (req, res) => {
    const msg = {
        message: req.body.message
    };
    p.send(msg, (err, result) => {
        if (err) {
            console.log(err);
            res.send(req.body.message + ' was not sent.');            
        }
        res.send(req.body.message + ' was sent.');
    });
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));