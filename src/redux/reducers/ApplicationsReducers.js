import { SIDEBAR,NOTIFICATION } from '../constants/ApplicationConstants'

export const ApplicationReducer = (state = {},action) =>{

    switch(action.type){
        case SIDEBAR:
            return {...state,sidebar:action.payload}
        case NOTIFICATION:
            return {...state,notification:action.payload}
        default : return state;
    }

}