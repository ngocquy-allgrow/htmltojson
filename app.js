const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express()
require('dotenv').config()
require('express-router-group');
const router = express.Router();
const path = require('path');
var cors = require('cors');
const HTML = require('html-parse-stringify')

global.router = router;
global.fs = fs;
global.path = path;
global.HTML = HTML;

app.use(cors());

// include router
const routers = require('./routers/router');
app.use('/', routers);

// Create an HTTP service.
const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
