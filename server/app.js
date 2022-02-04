const express = require('express');

const app = express();

// Listening for requests

app.listen(5566);

app.use((req, res) => {
    console.log(`hello there: ${req.hostname} ${req.path} ${req.method}`);
});

app.get('/', (req, res) => {
    res.send('<p>home page</p>');
});


app.get('/boutmait', (req, res) => {
    res.send('<p>home page</p>');
});

app.get('/bibibi', (req, res) => {
    res.send('<p>home page</p>');
});

// 404
app.use((req, res) => {
    res.status(404).send('<h1>YOU PICKED THE WRONG HOUSE FOOL</h1>');
});