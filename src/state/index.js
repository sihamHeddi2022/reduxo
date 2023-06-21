import { applyMiddleware, combineReducers, createStore } from 'redux'
import reducer from './reducers'
export * as actionCreators from "./actionCreators/index"
import thunk from "redux-thunk"

export const r= combineReducers({counter:reducer })

export const store = createStore(r,{},
    applyMiddleware(thunk))