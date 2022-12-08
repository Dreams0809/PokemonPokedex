const { response } = require('express');
const express = require('express')
const app = express()
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient
const PORT = 3000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'pokemonTeams'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true})
    .then(cleint => {
        console.log(`Connected to ${dbName} Databse`)
        db = cleint.db(dbName)
    })
    .catch(err => console.log(err))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static('public'));


app.get('/',async (request, response)=>{
    response.render('index.ejs')
})

app.get('/team1', async (request, response)=>{
    response.render('team1.ejs')
})

//POST
app.post('/addTeam1', async (request, response)=>{
    db.collection('Team1').insertOne({
        Pokemon:request.body.pokemonName})
    .then(result => {
        console.log('Added to Team 1')
        response.redirect('/team1')
    })
})








app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})