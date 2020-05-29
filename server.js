var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('jklfahohaufdsh'));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
  res.render('index');
});

app.use('/users', authMiddleware.requireAuth, userRoute);

app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);

app.use(sessionMiddleware);

app.listen(3000, function(){
  console.log('Server listening on port 3000');
});