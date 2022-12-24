const mongoose = require('mongoose')
const ChildcategorySchema = mongoose.Schema({
    Name:{
        type:String,
        require:true,
        },
    parentid:{
type:String
    }
})
module.exports = mongoose.model("childcategory",ChildcategorySchema)