const show = "";
export  const ShowSlectedPaperReducer = (state= show, action) =>{
    if(action.type === "SHOW_SELECTED_PAPER"){
        state = action.payload;
        return state;
    }else{
        return state;
    }
}

export default ShowSlectedPaperReducer;