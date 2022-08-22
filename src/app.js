const path = require('path')

const express = require('express');
const { application } = require('express');
const app = express();


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

app.get('/ejs', (req, res) => {
    res.render('bienvenidos')
})

app.get('/ejs1', (req, res) => {
    
    res.render('bienvenidos', {
    usuario:[ {
        name: "leandro",
        email: "leandrorossa87@gmail.com"
    },
       {name: "romi",
        email: "rominalora83@gmail.com"
    },
    {name: "Fausto",
        email: "faustorossa13@hotmail.com"
    },
    {name: "genaro",
        email: "genarorossa87@gmail.com"
    }
]
});

})

app.get('/', (req, res) => {
    res.send('Bienvenidos a la Pagina Principal')
});


app.listen(3000, ()=> console.log("Proyecto en el puerto 3000"));
