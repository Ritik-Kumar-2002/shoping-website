
const initialValue = [1];

const FetchAllProduct = (state= initialValue, action) =>{
  
    if(action.type === "GETPRODUCT" ){
        return [...state, ...action.payload];
    }else {
        return state;
    }
}
export default FetchAllProduct;