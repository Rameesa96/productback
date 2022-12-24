const mongoose = require('mongoose')
const SubcategorySchema = mongoose.Schema({
    Name:{
        type:String,
        require:true,
        },
    parentid:{
type:String
    }
})
module.exports = mongoose.model("subcategory",SubcategorySchema)