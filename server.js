var express        = require('express');
// var mongoose    = require('mongoose');
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var cors           = require('cors');
var app            = express();

// var db = require('./config/db');
// mongoose.connect(db.url);

var port = process.env.PORT || 3000;

//CORS middleware
/*var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.allowedDomains);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}*/

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cors());
// app.use(allowCrossDomain);

// require('./app/routes')(app);
app.get('/', function(req, res) {
    res.send('Hola mundo');
});

app.get('/webservice/:name/:password', cors(), function(req, res, next) {
    var name = req.params.name;
    var password = req.params.password;
    res.json({
        msg: 'This is CORS-enabled for all origins!: ',
        name: name,
        password: password
    });
});

app.listen(port);
console.log('Magic happens on port ' + port);

exports = module.exports = app;