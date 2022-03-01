import {TESTING} from '../constants/TestingConstants'


export const TestingReducer = (state ={TestingReduceres:[]} ,action) =>{
    console.log(state);
    switch(action.type){
        case TESTING:
            console.log(state);
            return {...state,TestingReduceres:action.payload}
        default:
            return state;
    }

    
}