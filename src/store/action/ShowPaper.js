export const ShowPaperAction = (boolValue) => {
    return{
        type: 'SHOW_PAPER_ACTION',
        payload: boolValue,
    }
}

export const ShowPaper = (select) =>{
    return{
        type:"SHOW_SELECTED_PAPER",
        payload: select,
    }
}