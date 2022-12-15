const { response } = require('express')
const team1 = require('../Models/pokemonTeams')

module.exports = {
    createTeam1: async (require,response)=>{
        try{
            await team1.create({
            pokemon: request.body.pokemonName,
            Attack: request.body.pokemonAttack,
            Defense:request.body.pokemonDefense,
            Type: request.body.pokemonType
            })
            console.log('Pokemon added to team 1')
            response.redirect('/team1')
        }catch(err){
            console.log(err)
        }

    },

    getPokemon: async (require,response)=>{
        try{
            response.render('index.ejs')
        }catch(err){
            console.log(err)
        }
    },

    getTeam1: async (require,response)=>{
        try{
            response.render('team1.ejs')
        }catch(err){
            console.log(err)
        }
        
    }


}