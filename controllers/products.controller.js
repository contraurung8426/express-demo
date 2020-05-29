var db = require('../db');
var _ = require('lodash');

module.exports.index = function(req, res){
    var sessionId = req.signedCookies.sessionId;
    var page = parseInt(req.query.page || 1);
    var perPage = 6;
    var begin = (page - 1) * perPage;
    var end = page * perPage;
    var qty = 0;

    var cart = db.get('sessions').find({id: sessionId}).get('cart').value();
    _.mapKeys(cart, function(key){
        qty+= key;
    })

    res.render('products/index', {
        products: db.get('products').value().slice(begin,end),
        pageCurrent: page,
        pageLast: db.get('products').findLastIndex().value(),
        qty_cart: qty
    });
}

module.exports.detail = function(req, res){

}

module.exports.search = function(req, res){

}