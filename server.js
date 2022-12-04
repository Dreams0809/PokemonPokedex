const express = require('express')
const app = express()
const PORT = 3000


app.get('/',async (request, response)=>{
    response.sendFile(__dirname + '/html/index.html')
})







app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})