import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const Cg = req.query.Cg
    if(Cg){
        const products =  await Product.find({category : Cg});
        res.json(products)

    }
    else{
        const products =  await Product.find({});
        res.json(products)

    }
})




// @desc Fetch single  product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product =  await Product.findById(req.params.id)
    if(product){
        res.json(product)
        console.log('passsssssssed')
    } else{
        // status it's 500 by default cuz of errHandler
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getProducts, getProductById
}