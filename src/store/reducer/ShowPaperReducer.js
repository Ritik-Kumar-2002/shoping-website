
const initialValue = false;
const ShowPaperReducer = (state= initialValue, action) =>{
    if(action.type === "SHOW_PAPER_ACTION"){
        state = action.payload;
        return state;
    }else{
        return state;
    }
}
export default ShowPaperReducer;

