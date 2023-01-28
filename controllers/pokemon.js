﻿const { response, request } = require('express')
const Pokemon = require('../Models/Pokemon');
const { post } = require('../routes/home');

module.exports = {

    getProfile: async(request,response) =>{
        try{
            const searchResult = await Pokemon.find({ userId: request.user.id}) ;
            response.render("profile.ejs", {pokemon: searchResult, user: request.user });
        } catch (err){
            console.log(err);
        }
    },


    getFeed: async(request, response)=>{
        try{
            // const user = await Pokemon.find({user: request.user.id})
            const pokemons = await Pokemon.find().sort({createdAt: "desc"}).lean();
            response.render("feed.ejs", {pokemons: pokemons, user: request.user})
        }catch (err){
            console.log(err);
        }
    },

    getPost: async (require,response) =>{
        try{
            const pokemon = await Pokemon.findById(request.params.id);
            response.render("pokemon.ejs", {pokemon: pokemon, user: request.user})
        }catch (err){
            console.log(err);
        }
    },
    

    createTeam: async(request,response) =>{
        try{
            
            console.log(request.user)
            await Pokemon.create({
                userId: request.user._id,
        
                pokemon1: request.body.pokemon1,
       
                pokemon2:request.body.pokemon2,
     
                pokemon3: request.body.pokemon3,
        
                pokemon4: request.body.pokemon4,
          
                pokemon5:request.body.pokemon5,
            
                pokemon6: request.body.pokemon6,
                
                createdAt: Date.now(),
               
                teamNumber: request.body.teamNumber,
      
            });
            console.log("Pokemon added !")
            response.redirect('/profile')
        }catch (err){
            console.log(err)
        }
    },

   




}