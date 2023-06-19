// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const Data = require('./users.json');
// defining the Express app
const app = express();
const dotenv = require('detenv');

dotenv.config();

const PORT = process.env.PORT || 3001;

const config = {
  server: {
    port: PORT,
  }
}
// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req: any, res: any) => {
  res.send(Data);
});

// starting the server
app.listen(config.server.port, () => {
  console.log('listening on port 3001');
});