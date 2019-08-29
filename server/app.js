import 'dotenv/config';
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 8000;
const hostname = process.env.HOST_URL;

import { userRoute } from './routes';

const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.set('port', port);

app.use(userRoute);

// app level error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(`Something went wrong! ${err.message}`);
})

//Bind application with port and hostname
app.listen(port, hostname, () => {
    console.log(`App is running at http://${hostname}:${port}/`);
});
