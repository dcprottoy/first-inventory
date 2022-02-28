import React from 'react';
import { Navbar } from 'reactstrap';


 const PappBar = (props) =>{
        const {sideBarOpen,setSideBarOpen} = props;
        return <div >
        <Navbar style={{backgroundColor:'green',height:'10vh'}}>
                <p onClick={()=>setSideBarOpen(!sideBarOpen)}>Prottoy</p>
        </Navbar>
        </div>
 }

 export default PappBar;