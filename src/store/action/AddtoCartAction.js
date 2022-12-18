// THIS FUNCTION ADD SELECTED DATA INTO A CART

const AddToCartAction = (data)=>{
    return {
        type: "ADD_To_CART",
        payload: data,
    };
}