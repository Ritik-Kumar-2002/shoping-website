import { combineReducers } from "redux";
import ShowPaperReducer from "./reducer/ShowPaperReducer";
import FetchAllProduct from "./reducer/getAllProduct";
import ShowSlectedPaperReducer from "./reducer/ShowSelectedPaper";
import CartReducer from "./reducer/cartReducer";
import BAGREDUCER from "./reducer/BagReducer";

const rootReducer = combineReducers({
    ShowPaper: ShowPaperReducer,
    FetchAllProduct: FetchAllProduct,
    ShowSlectedPaperReducer: ShowSlectedPaperReducer,
    CartReducer: CartReducer,
    BAGREDUCER: BAGREDUCER,

});

export default rootReducer;