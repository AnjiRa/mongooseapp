const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductSchema = new Schema({
    code: {
        type:String,
        required:true

    },name :{
        type:String,
        required:true

    }, price:{
        type:Number,
        required:false

    }
})
module.exports =  mongoose.model('Product', ProductSchema);