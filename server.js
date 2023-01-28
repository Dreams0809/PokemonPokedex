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
const cors = require('cors')
require('dotenv').config({path: './config/.env'})





// Passport config
require('./config/passport')(passport)


// Connect to DB
connectDB()




// General Middleware
app.use(cors())
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
        store: new MongoStore({mongooseConnection: mongoose.connection})
    })
)

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use('/', homeRoutes)
app.use('/pokemon', pokemonRoutes)





app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port`)
})