const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const pokemonController = require('../controllers/pokemon')

// router.get("/:id", ensureAuth, pokemonController.getPost);

router.post('/createTeam', pokemonController.createTeam)

router.delete("/deleteTeam", pokemonController.deleteTeam)



module.exports = router