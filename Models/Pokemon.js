const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    
    pokemon1:{
        type: String
    },

    pokemon2:{
        type: String
    },

    pokemon3:{
        type: String
    },

    pokemon4:{
        type: String
    },

    pokemon5:{
        type: String
    },

    pokemon6:{
        type: String
    },

    createdAt:{
        type: Date,
        default: Date.now
    },






});


// const TeamSchema2 = new mongoose.Schema({
//     userId:{
//         type: String,
//         required: true
//     },
    
//     pokemon1:{
//         type: String
//     },

//     pokemon2:{
//         type: String
//     },

//     pokemon3:{
//         type: String
//     },

//     pokemon4:{
//         type: String
//     },

//     pokemon5:{
//         type: String
//     },

//     pokemon6:{
//         type: String
//     },

//     createdAt:{
//         type: Date,
//         default: Date.now
//     },





// })

// const TeamSchema3 = new mongoose.Schema({
//     userId:{
//         type: String,
//         required: true
//     },
    
//     pokemon1:{
//         type: String
//     },

//     pokemon2:{
//         type: String
//     },

//     pokemon3:{
//         type: String
//     },

//     pokemon4:{
//         type: String
//     },

//     pokemon5:{
//         type: String
//     },

//     pokemon6:{
//         type: String
//     },

//     createdAt:{
//         type: Date,
//         default: Date.now
//     },





// })

// const TeamSchema4 = new mongoose.Schema({
//     userId:{
//         type: String,
//         required: true
//     },
    
//     pokemon1:{
//         type: String
//     },

//     pokemon2:{
//         type: String
//     },

//     pokemon3:{
//         type: String
//     },

//     pokemon4:{
//         type: String
//     },

//     pokemon5:{
//         type: String
//     },

//     pokemon6:{
//         type: String
//     },

//     createdAt:{
//         type: Date,
//         default: Date.now
//     },






module.exports = mongoose.model('Pokemon', TeamSchema)