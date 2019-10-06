//Internal  Libs 
const path = require('path')

//External  Libs 
const express = require('express')

//Const Declaration 
const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

app = express();
// app.use
app.use(express.static(publicDirectoryPath))

app.get('/', (req,res) => {
    res.send('test')
})

app.listen(3000,() => {
    console.log("Server Started at :"+3000)
})

