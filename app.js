const express = require('express')

const path = require('path')

const publicPath = path.resolve(__dirname, './public')

const app = express()

app.use( express.static(publicPath))

app.listen(3000, () => console.log('servidor funcionando'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})