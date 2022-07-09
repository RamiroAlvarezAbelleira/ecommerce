const express = require('express')

const path = require('path')

const publicPath = path.resolve(__dirname, './public')

const app = express()

const port = 3000;

app.use( express.static(publicPath))

app.listen(port, () => console.log(`servidor funcionando en el puerto ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})