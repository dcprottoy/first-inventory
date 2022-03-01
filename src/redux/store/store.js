import React from 'react'
import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';


import { TestingReducer } from '../reducers/TestingReducers';
import {ApplicationReducer} from '../reducers/ApplicationsReducers';

const allReducer = combineReducers({
    Testing:TestingReducer,
    Application:ApplicationReducer,
})

const middleware = [thunk];
const initialState = {
    Testing:{
        TestingReduceres:"Testing Data",
    },
    Application:{
        sidebar:true,
        notification:false
    }
}
const store = createStore(allReducer,initialState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;