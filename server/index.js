// Hosting variables

const PORT = 3500,
    HOST = 'localhost'
const models = require('./db_struct');

// Library dependencies

const express = require('express'),
     sequelize = require('./db_connect'),
    cors = require('cors');
app = express();

app.use(cors());
app.use(express.json());

app.get('/project/:id', (req, res) => {

});

app.post('/task', (req, res) => {
    models.Task.create(req.body);
    console.log(req.body);

    res.send(JSON.stringify({
        message: 'OK'
  }));
});

app.patch('/task/:id', (req, res) => {

});

app.post('/status', (req, res) => {

});



const start = async () => {
    try {
        await sequelize.authenticate();
        await  sequelize.sync();
        app.listen(PORT, () => console.log(`Server started. PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();