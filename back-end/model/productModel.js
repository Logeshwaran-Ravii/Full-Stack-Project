const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    image:{
        type:String,
        require:[true,'image is required']
    },
    name:{
        type:String,
        required:[true,'please enter product name'],
        maxlength:[50,'maximum characters cant exceed 30']
    },
    description:{
        type : String,
        required : [true,'please enter product description'],
        maxlength:[100,'maximum characters cant exceed 30']
    },
    price:{
        type : Number,
        default : 0.0
    },
    rating:{
        stars:{
        type: Number,
        default : 0
        },
        reviews:{
            type:Number,
            default : 0
        }
    },
    category:{
        type:String,
        required:[true,'catagory should be metioned'],
    },
    seller:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        require:[true,'please enter number of stock']
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
 

})

Schema.method.test=()=>{
    console.log('working')
}

const ProductModel = mongoose.model('product',Schema)

module.exports = ProductModel
