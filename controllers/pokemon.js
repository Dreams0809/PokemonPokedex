const { response, request } = require('express')
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


    createTeam: async(request,response) =>{
        try{
            
            console.log(request.user)
            await Pokemon.create({
                
                userId: request.user._id,

                teamName: request.body.teamName,
        
                pokemonTeam: request.body.pokemonTeam,
            });
            console.log("Pokemon added !")
            response.redirect('/profile')
        }catch (err){
            console.log(err)
        }
    },

    deleteTeam: async(request, response) =>{
        try{
            let pokemon = await Pokemon.findOne({ _id: request.params.id});
            await Pokemon.deleteOne({ _id: request.params.id});
            console.log("Team Deleted");
            response.redirect("/profile");
        } catch(err){
            response.redirect("/profile")
        }
    },

   




}