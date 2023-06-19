// importing the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var helmet = require('helmet');
var morgan = require('morgan');
var Data = require('./users.json');
// defining the Express app
var app = express();
var dotenv = require('detenv');
dotenv.config();
var PORT = process.env.PORT || 3001;
var config = {
    server: {
        port: PORT,
    }
};
// adding Helmet to enhance your API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));
// defining an endpoint to return all ads
app.get('/', function (req, res) {
    res.send(Data);
});
// starting the server
app.listen(config.server.port, function () {
    console.log('listening on port 3001');
});
