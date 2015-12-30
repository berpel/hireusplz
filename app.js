var express = require('express')
  , bodyParser = require('body-parser')
  , session = require('cookie-session')
  , cookieParser = require('cookie-parser')
  
app = express();

app.use(bodyParser());

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'))

app.use(session({
  secret: 'hireusplz1112'
}));

app.use(cookieParser())

app.get('/templates/:template', function(req, res, next) {
  return res.render('templates/'+req.params.template);
});

app.get('/', function(req, res, next) {
  return res.render('index', {});
});

server = app.listen(3001, function() {
  console.log('Express server started on port '+3001);
});
