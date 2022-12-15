const { response } = require('express');
const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const pokemonRoutes = require('./routes/pokemon')


// const mongodb = require('mongodb');
// const MongoClient = require('mongodb').MongoClient
require('dotenv').config({path: './config/.env'})

connectDB()

// let db,
//     dbConnectionStr = process.env.DB_STRING,
//     dbName = 'pokemonTeams'

// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true})
//     .then(cleint => {
//         console.log(`Connected to ${dbName} Databse`)
//         db = cleint.db(dbName)
//     })
//     .catch(err => console.log(err))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static('public'));


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