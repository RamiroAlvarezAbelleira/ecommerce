const express = require('express');

const path = require('path');

const publicPath = path.join(__dirname, '../public');

const app = express();

const port = 3000;

const mainRoutes = require('./routes/main');

app.listen(port, () => console.log(`servidor funcionando en el puerto ${port}`));

app.use(express.static(publicPath));

app.use(mainRoutes);



