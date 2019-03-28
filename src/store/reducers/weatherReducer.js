import { GET_WEATHER } from "../actions/actionTypes";

const initState = { 
    placeDetails:{ 
        weather:[ { icon:""}]
    } 

};

const weatherReducer = ( state=initState,action) => {
    switch(action.type){
        case GET_WEATHER:
        console.log(action.data)
        return {...state,placeDetails:action.data};
        default:
        return state;
    }

}

export default weatherReducer;