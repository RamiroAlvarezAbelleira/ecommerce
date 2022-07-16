const express = require('express');

const path = require('path');

const publicPath = path.join(__dirname, '../public');

const app = express();

const port = 3000;

const mainRoutes = require('./routes/main');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(publicPath));

app.use('/', mainRoutes);

app.listen(port, () => console.log(`servidor funcionando en el puerto ${port}`));





