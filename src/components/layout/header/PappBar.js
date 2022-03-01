import React from 'react';
import { Navbar,NavbarBrand,Button  } from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux';
import { SidebarAction } from '../../../redux/actions/ApplicationActions';


 const PappBar = (props) =>{

       const dispatch = useDispatch();
       const sideBar_store_data = useSelector(state=>state.Application);
       const sidebarValue = sideBar_store_data.sidebar; 
       console.log(sidebarValue);
       
       const menuHandler = () =>{
              
              dispatch(SidebarAction(!sidebarValue));

       }
       
       return (
              <div >
                     <Navbar style={{backgroundColor:'whitesmoke',height:'10vh'}}>
                            <NavbarBrand href="/">
                                   First Inventory
                            </NavbarBrand>
                            <Button className='mrl-auto' color="info" onClick={()=>menuHandler()}>info</Button>
                     </Navbar>
              </div>
              )
 }

 export default PappBar;