require('dotenv').config();
//Import Libraries
const fs = require('fs');
const express = require('express');
const https = require('https');
const http = require('http');
const SocketIO = require('./socketIO');
const helmet = require('helmet');
const hpp = require('hpp');

/***Midleware**/
var cors = require('cors');
var morgan = require('morgan');
const compression = require('compression')

//Create a new Express application and Configure it
const app = express();
app.use(compression()) // Best practices
app.use(morgan('common')) // HTTP request logger middleware for node.js
app.use(cors({
    credentials: true,
    origin: true,
})); // Use cors module for enable Cross-origin resource sharing  

/* Set Security Configs */
app.use(helmet());
app.use(hpp());

// parses the body for POST, PUT, DELETE, etc.
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res)=> {
    res.status(200).send('Ready')
})

//Configure route
require('./routes')(app);

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

// https credentials
// var credentials = {
//     key: fs.readFileSync(process.cwd() + '/fakesslcert/key.pem'),
//     cert: fs.readFileSync(process.cwd() + '/fakesslcert/cert.pem')
// };

// var httpsServer = https.createServer(credentials, app)
var httpServer = http.createServer(app)
/// Support of socketIO
SocketIO(httpServer)

httpServer.listen(PORT, () => {
    console.log(`Restfull Api running at https://${HOSTNAME}:${PORT}`);
})
