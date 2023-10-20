const product = require("../models/product");
const mongoose = require("mongoose");

const getProducts = async (req,res)=>{
    try{
        const products =await product.find();
        res.status(200).json(products)
    }catch(error){
        res.status(404).json({error:error.message})
    }
}

module.exports={getProducts}