import weather from "./weatherReducer";
import tourists from "./touristsReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    weather,
    tourists
})

export default rootReducer;