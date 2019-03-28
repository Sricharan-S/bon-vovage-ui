import axios from "axios";
import { GET_TOURISTS } from "./actionTypes";

export const provideTourists = () => {
    return (dispatch,getState) => {
        //make async requests
        axios.get("http://localhost:3001/api/tourists").then(res => {
            console.log(res.data);
            dispatch({
                type:GET_TOURISTS,
                data:res.data
            })
        })
        
    }
}
