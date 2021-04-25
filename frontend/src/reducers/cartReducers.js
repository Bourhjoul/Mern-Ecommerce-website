import{CART_ADD_ITEM,CART_REMOVE_ITEM,CART_SAVE_SHIPPING_ADRESSE,CART_SAVE_PAYMENT} from '../constants/cartConstants'
export const cartReducer = (state = {cartItems:  [],shippingAddress: {} , images: []}, action) =>{
    switch(action.type) {
        case CART_ADD_ITEM:

        const item = action.payload

        // x.prosuct it's the ID
        const existItem = state.cartItems.find(x=> x.product === item.product)
        if(existItem){
            return{
            ...state,
            cartItems: state.cartItems.map((x)=>
             x.product === existItem.product ? item : x
                ),
            }
        } else {
            return{
                ...state,
                cartItems: [...state.cartItems,item]
            }
        }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x)=> x.product !== action.payload),
            }
        case CART_SAVE_SHIPPING_ADRESSE:
            return {
                ...state,
                shippingAddress: action.payload,
            }
        case CART_SAVE_PAYMENT:
            return {
                ...state,
                paymentMethod: action.payload,
            }
        default : return state
    
    }
}