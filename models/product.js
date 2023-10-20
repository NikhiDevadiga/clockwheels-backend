const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    Vimage:{
        type:String,
        required:true
    },
    Vname:{
        type:String,
        required:true
    },
    Vtype:{
        type:String,
        required:true
    },
    Vprice:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})
const productModel = mongoose.model('products',productSchema)

module.exports = productModel