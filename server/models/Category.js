const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema({
    Name:{
        type:String,
        require:true,
        }
})
module.exports = mongoose.model("category",CategorySchema)