import { SIDEBAR,NOTIFICATION } from "../constants/ApplicationConstants";


export const SidebarAction = (value) => async (dispatch)=>{

    dispatch({
        type:SIDEBAR,
        payload:value
    });

}


export const NotificationAction = () => async (dispatch)=>{

    dispatch({
        type:NOTIFICATION,
        payload:true
    });

    const myClick = setTimeout(()=>{
        dispatch({
            type:NOTIFICATION,
            payload:false
        });
        clearTimeout(myClick);
    }, 1000);

}