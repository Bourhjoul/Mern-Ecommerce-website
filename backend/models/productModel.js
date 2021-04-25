import mongoose from 'mongoose'


const reviewSchema = mongoose.Schema({
    name : { type: String, required: true},
    rating : { type: Number, required: true},
    comment : { type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User' //relation betwen the review and the user
    },
},{ 
    timestamps: true
})
const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User' //relation betwen the product and yhe user
    },
    name:{
        type : String,
        required: true
    },
    images:[{
        type : String,
    }],
    description:{
        type : String,
        required: true
    },
    category:[{
        type : String,
        required: true
    }],
    sizes:[{
        type : String,
        required: true
    }],
    reviews: [reviewSchema],
    rating:{
        type : Number,
        required: true,
        default: 0
    },
    numReviews:{
        type : Number,
        required: true,
        default: 0
    },
    price:{
        type : Number,
        required: true,
        default: 0
    },
    countInStock:{
        type : Number,
        required: true,
        default: 0
    },
},{
    timestamps: true
}) 

const Product = mongoose.model('Product', productSchema)  

export default Product