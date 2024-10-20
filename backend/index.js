const express = require('express'),
bodyParser = require('body-parser'),
routesHandler= require('./routes/handler.js');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routesHandler);

const PORT = 4000; //backend routing port
app.listen(PORT, () => {
    console.log('Server is running on port $(PORT).')
})