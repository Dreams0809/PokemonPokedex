const express = require('express')
const app = express()
const PORT = 3000



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})