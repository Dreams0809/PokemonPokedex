const mongoose = require('mongoose')


const PokemonSchema = new mongoose.Schema({
    pokemon:{
        type: String
    },

    Type:{
        type: String
    },

    Attack:{
        type: Number
    },

    Defense:{
        type: Number
    }

})

module.exports = mongoose.model('team1', PokemonSchema)