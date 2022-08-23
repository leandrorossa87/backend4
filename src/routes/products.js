const express = require('express');
const productControllers = require('../controllers/product');
const app = express();

app.get('/products', productControllers.getproducts);
//busqueda con param//
app.get('/products/:id', productControllers.getproduct)
//busqueda con query//
app.get('/products1', productControllers.searchproducts)
//esta ruta no se suele hacer//
//solamente las dos principales//

module.exports = app;