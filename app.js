const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs'); // para el uso de handlebars en express
hbs.registerPartials(__dirname + '/views/partials'); // para usar parciales

// para servir contenido estatico
app.use(express.static('public')); // definicion del midleware express

app.get('/', (req, res) => {
    res.render('home', { // argumentos
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta');
})

/*app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})*/

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})