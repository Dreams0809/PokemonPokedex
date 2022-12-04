const express = require('express')
const app = express()
const PORT = 3000
require('dotenv').config()



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static('public'));


app.get('/',async (request, response)=>{
    response.ren(__dirname + '/html/index.html')
})







app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})