const path = require('path')

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenidos')
})

app.listen(3000, () => console.log('Proyecto en el puerto 300'))