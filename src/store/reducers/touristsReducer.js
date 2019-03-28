import { GET_TOURISTS } from "../actions/actionTypes";

const initState = { 
        touristsInfo:[]
};

const touristsReducer = ( state=initState,action) => {
    switch(action.type){
        case GET_TOURISTS:
        return {...state,touristsInfo:[...action.data]}
        default:
        return state;
    }

}

export default touristsReducer;