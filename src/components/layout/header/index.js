import React from 'react';
import PappBar from './PappBar';

const Body = (props) =>{
 const {sideBarOpen,setSideBarOpen} = props;
return <PappBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>

}

export default Body;
