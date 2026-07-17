const { Schema } = require("mongoose")
const ProductModel = require("../model/productModel")
const ApiFeatures  = require("../utils/apiFeatures")

exports.getProducts = async (req,res)=>{
    try{
        const apiFeature = new ApiFeatures(ProductModel.find(),req.query).search().filter()
        const products = await apiFeature.query
        const count = products.length
        res.status(200).json({
            sucess: true,
            count ,
            products
        })
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}
exports.getSingleProduct = async (req,res)=>{
    try{
        const {id} = req.params
        const product = await ProductModel.findById(id)
        if(!product){
            return res.status(404).json('product not found')
        }
        const count = product.length
        res.status(200).json({
            success: true,
            count ,
            product
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success : 'Fail'
        },'internal server error')
    }

}

exports.createProduct = async (req,res)=>{
    try{
        const products = await ProductModel.create(req.body)
        res.status(201).json({
            sucess: true,
            products
        })

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
}

exports.updateProduct = async(req,res)=>{
    try{
        const {id}= req.params
        const product = await ProductModel.findById(id)
        if(!product){
            console.log('product not found ')
            return res.status(401).json('product not found..')
        }
        const updatedProduct = await ProductModel.findByIdAndUpdate(id,req.body)
        res.status(200).json({
            sucess:true,
            updatedProduct
        })
    }catch(error){
        console.log(error)
        res.status(500).json('internal server error'+ error)
    }


}
exports.deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params
        const product = await ProductModel.findById(id)
        if(!product){
           console.log('product not found')
           return res.status(404).json('product not found')
        }
        await ProductModel.findByIdAndDelete(id)
        res.status(200).json({
            sucess:true,
            message: 'producted deleted'
       })
    }catch(error){
        console.log(error)
        res.status(500).json('internal server error')
    }
}