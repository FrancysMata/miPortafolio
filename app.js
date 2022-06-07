const express = require ('express');
const path = require ('path');
const app = express();

const homeroute = require ('./src/routes/homeroute');
const aboutroute = require ('./src/routes/aboutroute')
const resumeroute = require ('./src/routes/resumeroute')


app.use('/', homeroute);

app.use ('/about', aboutroute);

app.use ('/resume', resumeroute)

app.use (express.static(path.resolve(__dirname, './public')));

app.set ('view engine', 'ejs')


app.listen(process.env.PORT || 3002, () => console.log('Servidor corriendo'))

module.exports= app;