import axios from "axios";
import { GET_WEATHER } from "./actionTypes";

export const provideWeather = (place) => {
    return (dispatch,getState) => {
        //make async requests
        if(!place)
        return;
        axios.get("http://localhost:3001/api/weather/"+ place.trim()).then(res => {
            dispatch({
                type:GET_WEATHER,
                data:res.data
            })
        })
        
    }
}


