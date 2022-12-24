const mongoose =require('mongoose')
const productschema = mongoose.Schema({
    Name:{
        type:String
    },
    Price:{
        type:String
    },
  categoryid:{
    type:String
  }
})
module.exports = mongoose.model("product",productschema)