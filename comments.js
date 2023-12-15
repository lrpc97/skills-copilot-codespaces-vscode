// Create web server

// Load modules
const express = require('express');
const path = require('path');

// Create web server
const app = express();

// Configure web server
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Start web server
app.listen(3000, () => {
    console.log('Web server started at http://localhost:3000');
});

// Route: GET /
app.get('/', (req, res) => {
    res.render('index');
});

// Route: GET /comments
app.get('/comments', (req, res) => {
    const comments = [
        { username: 'Todd', comment: 'I love chocolate cake!' },
        { username: 'Louis', comment: 'I like vanilla cake!' },
        { username: 'John', comment: 'I hate chocolate cake!' }
    ];
    res.render('comments/index', { comments });
});

// Route: GET /comments/new
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

// Route: POST /comments
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    res.send('OK');
});