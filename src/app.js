const path = require('path')

const express = require('express');
const app = express();

const { application } = require('express');

//de esta forma ingresa a la carpeta public en el buscargor ponemos
//directamente el archivo sin nombrar la carpeta
app.use(express.static('public'));  


//busqueda de rutas con prefijo
app.use('/busqueda', express.static('publica'));

app.use('/celular', express.static('mobile'));

app.use('/escritorio', express.static('desktop'));

//registo ejs como motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views/vistas'))
// tuve que poner dos puntos porq el dirname me lleva desde src afuera 
//y necesito que entre a mi views

app.get('/', (req, res) => {
    res.send('Bienvenidos a la Pagina Principal')
});

app.get('/ejs', (req, res) => {
    res.render('bienvenidos')
});

app.use('/api/v1', require('./routes/products'))

app.listen(3000, ()=> console.log("Proyecto en el puerto 3000"));
