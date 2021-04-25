import asyncHandler from 'express-async-handler'

import Order from '../models/orderModel.js'

// @desc Create new order
// @route POST /api/orders
// @access Private
const addorderitems = asyncHandler(async (req, res) => {
    console.log(req.user)

    const {orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice} = req.body
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
        return
    }else{
        const order = new Order({
            user:req.user._id,
            orderItems,

            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})
    // @desc get order by id
    // @route GET /api/orders/:id
    // @access Private
const getOrderById = asyncHandler(async (req, res) => {
    const order  = await Order.findById(req.params.id).populate('user','name email')
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order Not found')
    }
    
})
    // @desc update order to paid
    // @route update /api/orders/:id/pay
    // @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order  = await Order.findById(req.params.id)
    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,

        }
        const updatedOrder = await order.save()
        res.json(updatedOrder)

    }else{
        res.status(404)
        throw new Error('Order Not found')
    }
    
})


// @desc update order to delivered
    // @route update /api/orders/:id/deliver
    // @access Private
    const updateOrderToDelivered = asyncHandler(async (req, res) => {
        const order  = await Order.findById(req.params.id)
        if(order){
            order.isDelivered = true
            order.deliveredAt = Date.now()
            const updatedOrder = await order.save()
            res.json(updatedOrder)
    
        }else{
            res.status(404)
            throw new Error('Order Not found')
        }
        
    })
    // @desc get logged in user orders
    // @route GET /api/orders/myorders
    // @access Private
const GetMyOrders = asyncHandler(async (req, res) => {
    const orders  = await Order.find({user: req.user._id})
    res.json(orders)
    
})

// @desc get orders
    // @route GET /api/admin/orders
    // @access Private/admin
    const GetOrders = asyncHandler(async (req, res) => {
        const orders  = await Order.find({}).populate('user','id name')
        res.json(orders)
        
    })

export {addorderitems,getOrderById,updateOrderToPaid,GetMyOrders,GetOrders,updateOrderToDelivered}