import React from 'react'
import SideBar from './SideBar'

export default function Body(props){
        const {sideBarOpen}=props;
    return <SideBar isOpen={sideBarOpen}></SideBar>
}