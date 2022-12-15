const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemon')

router.get('/', pokemonController.getPokemon)

router.post('/team1', pokemonController.getTeam1)

router.post('/addTeam1', pokemonController.createTeam1)

module.exports = router