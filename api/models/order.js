const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    products:[
        {
            name:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            print:{
                type:Number,
                required:true
            },
            Image:{
                type:String,
                required:true
            }
        }
    ],
    totalPrice:{
        type:Number,
        required:true
    },
    shippingAddress:{
        name:{
            type:String,
            required:true
        },
        mobileNo:{
            type:String,
            required:true
        },
        houseNo:{
            type:String,
            required:true
        },
        street:{
            type:String,
            required:true
        },
        landmark:{
            type:String,
            required:true
        },
        postalcode:{
            type:String,
            required:true
        }
    },
    peymentMethod:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Order = mongoose.model("Order",orderSchema);

module.exports = Order;