import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import homeReducer from "./Reducers/homeReducer";
import quizReducer from "./Reducers/quizReducer";

const rootReducer=combineReducers({
home:homeReducer,
quiz:quizReducer,
})


const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store
