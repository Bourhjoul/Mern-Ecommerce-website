import express  from 'express'
import dotenv  from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)
app.use(errorHandler)

app.get('/', (req,res) =>{
    res.send('API is Runn....')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server runingin ${process.env.NODE_ENV } mode on port ${PORT}`.yellow.bold))
