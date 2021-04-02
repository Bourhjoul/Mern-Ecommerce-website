import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import product from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'


dotenv.config()
connectDB()

const importData = async () => {
    try {
        // empty all models 
       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()
       // Add data to models
        // select all users 
       const createUsers = await User.insertMany(users)
       // select admin user
       const adminUser = createUsers[0]._id
        //add admin user for each products
        const sampleProducts = product.map(product => {
            return{...product, user: adminUser}
        })
        //add all products data to the model
        await Product.insertMany(sampleProducts)
        console.log('Data Imported'.green.inverse)
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        // empty all models 
       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()
    
        console.log(`Data Destroyed !`.red.inverse)
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

//node backend/seeder -d
if(process.argv[2] === '-d'){
    destroyData()
} else{
    importData()
}