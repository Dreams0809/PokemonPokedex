const { response, request } = require("express")

module.exports = {
    getIndex: (request,response)=>{
        response.render('landingPage.ejs')
    },
    getHome: (request,response)=>{
        response.render('index.ejs', {user: request.user})
    }
}



