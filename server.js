const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session) 
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const pokemonRoutes = require('./routes/pokemon')
require('dotenv').config({path: './config/.env'})





// Passport config
require('./config/passport')(passport)


// Connect to DB
connectDB()




// General Middleware

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static('public'));
app.use(logger('dev'))

// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({mongoUrl: process.env.DB_STRING})
    })
)

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use('/', homeRoutes)
app.use('/pokemon', pokemonRoutes)

// app.get('/',async (request, response)=>{
//     response.render('index.ejs')
// })

// app.get('/team1', async (request, response)=>{
//     response.render('team1.ejs')
// })

// //POST
// app.post('/addTeam1', async (request, response)=>{
//     db.collection('team1').insertOne({
//         Pokemon:request.body.pokemonName,
//         Attack: request.body.pokemonAttack,
//         Defense:request.body.pokemonDefense,
//         Type: request.body.pokemonType})
//     .then(result => {
//         console.log('Added to Team 1')
//         response.redirect('/team1')
//     })
// })








app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port`)
})