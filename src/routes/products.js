const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    
   const products = [
    {
        id: 1,
        title: "Reloj negro",
        price: 1000,
        is_offer: false
    },
    {
        id: 1,
        title: "Reloj Plata",
        price: 2000,
        is_offer: true
    },
    {
        id: 1,
        title: "Reloj oro",
        price: 2500,
        is_offer: false
    }
    
];

res.json(products);

});

module.exports = app;