import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { SidebarAction } from '../../../redux/actions/ApplicationActions';
import { Layout,Button } from 'antd';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined,MenuFoldOutlined } from '@ant-design/icons';

 const PappBar = (props) =>{

       const dispatch = useDispatch();
       const sideBar_store_data = useSelector(state=>state.Application);
       const sidebarValue = sideBar_store_data.sidebar; 
       console.log(sidebarValue);
       const { Header } = Layout;    
       const { Title } = Typography;
       const menuHandler = () =>{
              
              dispatch(SidebarAction(!sidebarValue));

       }
       
       return (
              <div >
                     
                     <Header style={{backgroundColor:'#002766',padding:0,paddingRight:'.3em',display:'flex',alignItems:'center',height:'6.7vh'}}>
                            <div style={{backgroundColor:'inherit',width:'225px',display:'flex',alignItems:'center',justifyContent:'center',borderRight:'2px white solid'}}>
                                   <Title level={4} style={{color:'whitesmoke'}}>FIRST INVENTORY</Title>
                            </div>

                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',userSelect:'none',color:'white',fontSize: '18px',marginLeft:'1em'}} onClick={()=>menuHandler()}>
                                   <Title level={5} style={{color:'white'}}> <MenuFoldOutlined />{"  "}Menu</Title>
                            </div>
                            <div style={{flexGrow:1}}>

                            </div>
                            <Avatar size={32} icon={<UserOutlined />}  />
                     </Header>
                            
              </div>
              )
 }

 export default PappBar;