const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },

    teamName:{
        type: String,
    },

    pokemonTeam:{
        type: [String]
    },

    createdAt:{
        type: Date,
        default: Date.now
    },


});


module.exports = mongoose.model('PokemonTeam', TeamSchema)