//Internal  Libs 
const path = require('path')

//External  Libs 
const express = require('express')
var hbs = require('hbs');

app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// app.use
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index.hbs')
})

app.listen(3000,() => {
    console.log("Server Started at :"+3000)
})

