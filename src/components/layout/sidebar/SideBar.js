import React,{useState} from 'react';
import './SideBar.css';
const SideBar = (props) =>{
    const {isOpen} = props;
    return <div className={`side-bar ${isOpen?"open-side":" "}`}>Prottoy</div>
}

export default SideBar;