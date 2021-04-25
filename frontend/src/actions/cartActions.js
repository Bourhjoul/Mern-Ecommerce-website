import axios from 'axios'
import {CART_ADD_ITEM,CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADRESSE,CART_SAVE_PAYMENT} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
const { data } = await axios.get(`/api/products/${id}`)
console.log(data)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      images: data.images,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart= (id)=> (dispatch,getState)=>{
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

export const saveAddressshipping = (data)=> (dispatch,getState)=>{
  dispatch({
    type: CART_SAVE_SHIPPING_ADRESSE,
    payload: data
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))

}
export const savepaymentmethod = (data)=> (dispatch,getState)=>{
  dispatch({
    type: CART_SAVE_PAYMENT,
    payload: data
  })
  localStorage.setItem('paymentMethod', JSON.stringify(data))

}