require('dotenv').config();
const cors = require('cors');
const express = require(`express`);
const index = require('./routes/index.js');
const game = require('./routes/game.js');

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

// app.get(`/`, (req, res) => res.send(`Hello World`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(`/`, index);
app.use(`/game`, game);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is runnning on http://${SERVERHOST}:${SERVERPORT}`);
});