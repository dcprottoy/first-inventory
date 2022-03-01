import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

import Header from '../header'

const Main = () =>{
   
    const value = useSelector(state =>  state.Application);
    const sideBarValue = value.sidebar;
    const notificationValue = value.notification;
   
    
   
    return (
    <div>
        <div className="header-part">
        <Header/>
        </div>
      
        <div className='body-part'>
            <div className={`sidebar-part ${sideBarValue ? 'sidebar-open':'sidebar-close'}`}>
                Side Bar Part
            </div>

            <div className='content-part'>
                 Content Part
                
            </div>

            <div className={`notification-part ${notificationValue ?"show-notification":"close-notification"}`}>
                Notification Part
            </div>
        </div>

        <div className='footer-part'>
                Footer Part
        </div>
    </div>
    )
}


export default Main;