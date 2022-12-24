const express = require ("express")
const router = express.Router()
const category = require('../models/Category')
const Subcategory=require("../models/Subcategory")
const Childcategory=require("../models/Childcategory")


router.post("/",async(req,res)=>{
   
    const categorys =new category(req.body)
    try{
    const newproducts =await categorys.save()
        res.status(200).json(newproducts)
    }
    catch(err){
        res.status(500).json(err.message)
    }
    })

    router.get("/",async(req,res)=>{
   
        
        try{
        const newproducts =await category.find()
            res.status(200).json(newproducts)
        }
        catch(err){
            res.status(500).json(err.message)
        }
        })


router.post("/subcategory",async(req,res)=>{
   
    const categorys =new Subcategory(req.body)
        try{
            const newproducts =await categorys.save()
         res.status(200).json(newproducts)
        }
         catch(err){
             res.status(500).json(err.message)
        }
    })
        
     router.get("/subcategory/:id",async(req,res)=>{
           
                
                try{
                const newproducts =await Subcategory.find({parentid:req.params.id})
                    res.status(200).json(newproducts)
                }
                catch(err){
                    res.status(500).json(err.message)
                }
                })



 router.post("/childcategory",async(req,res)=>{
   
    const categorys =new Childcategory(req.body)
        try{
            const newproducts =await categorys.save()
         res.status(200).json(newproducts)
        }
         catch(err){
             res.status(500).json(err.message)
        }
    })
        
     router.get("/childcategory/:id",async(req,res)=>{
           
                
    try{
    const newproducts =await Childcategory.find({parentid:req.params.id})
     res.status(200).json(newproducts)
        }
        catch(err){
         res.status(500).json(err.message)
    }
 })
module.exports=router