const express = require ("express")
const router = express.Router()
const product = require ('../models/product')

router.post("/",async(req,res)=>{
   
    const products =new product(req.body)
    try{
    const newproducts =await products.save()
        res.status(200).json(newproducts)
    }
    catch(err){
        res.status(500).json(err.message)
    }
    })
  router.get('/', async(req,res)=>{
    try{
        const newproducts =await product.find().limit(6)
            res.status(200).json(newproducts)
        }
        catch(err){
            res.status(500).json(err.message)
        }
  })

  router.get('/getbycategory/:id', async(req,res)=>{
    try{
        const newproducts =await product.find({categoryid:req.params.id})
            res.status(200).json(newproducts)
        }
        catch(err){
            res.status(500).json(err.message)
        }
  })
module.exports=router