

let initialState = [];

const BAGREDUCER = (state = initialState, action) =>{

    console.log("bag reducer is calling ", state, action);
    if(action.type == 'ADDTOBAG'){
        initialState.push(action.payload);
        console.log("transfer data is ", action.payload);

        return initialState;
    }else {
        return state;
    }
}

export default BAGREDUCER;