import React,{useState} from 'react';
import './index.css';

const Main = () =>{
    const [sideBarOpen,setSideBarOpen] = useState(false);
    const [notificationShow,setNotificationShow] = useState(false);

    const showNotification = () =>{
        setNotificationShow(notificationShow => {return !notificationShow});
        const myClick = setTimeout(()=>{
            setNotificationShow(notificationShow => {return !notificationShow});
            clearTimeout(myClick);
        }, 1000);
        
    }
    return (
    <div>
        <div className="header-part">
        Header Part
        </div>
        
        <div className='body-part'>
            <div className={`sidebar-part ${sideBarOpen ? 'sidebar-open':'sidebar-close'}`}>
                Side Bar Part
            </div>

            <div className='content-part'>
                 Content Part
                 <button onClick={()=> setSideBarOpen(!sideBarOpen)}>Click Me !</button>
            </div>

            <div className={`notification-part ${notificationShow ?"show-notification":"close-notification"}`}>
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