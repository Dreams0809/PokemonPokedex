const express = require('express')
const app = express()
const PORT = 8000




app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js')
})



app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
