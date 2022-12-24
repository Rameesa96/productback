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
  router.get('/getcount', async(req,res)=>{
    try{
        const newproducts =await product.find().count()
            res.status(200).json(newproducts)
        }
        catch(err){
            res.status(500).json(err.message)
        }
  })

  router.get('/category/:name', async(req,res)=>{
    try{
        const newproducts =await product.find({Maincategory:req.params.name}).limit(6)
            res.status(200).json(newproducts)
        }
        catch(err){
            res.status(500).json(err.message)
        }
  })
  router.get('/category1/:name', async(req,res)=>{
    try{
        const newproducts =await product.find({subcategory:req.params.name}).limit(6)
            res.status(200).json(newproducts)
        }
        catch(err){
            res.status(500).json(err.message)
        }
  })
  router.put('/push/:id', async(req,res)=>{
    try{
        const newproducts =await product.updateMany({categoryid:req.params.id},{$set:{Maincategory:req.body.Maincategory, subcategory:req.body.subcategory}},{new:true})
            res.status(200).json(newproducts)
        }
        catch(err){
            res.status(500).json(err.message)
        }
  })
module.exports=router