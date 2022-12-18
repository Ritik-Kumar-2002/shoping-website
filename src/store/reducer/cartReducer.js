
// THIS REDUCER ADD SELECTED DATA INTO YOUR CART

const initialValue = null;
const CartReducer = (state = initialValue, action) =>{
    if(action.type === "SET_CART_DATA"){
        state = action.payload;
        return state ;
    }else {
        return state;
    }
}
export default CartReducer;