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
                     
                     <Header style={{height:'10vh',backgroundColor:'#14213d',padding:0,display:'flex',alignItems:'center'}}>
                            <div style={{backgroundColor:'#468faf',width:'225px',height:'10vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                   <Title level={4} style={{color:'white'}}>FIRST INVENTORY</Title>
                            </div>

                            <div style={{backgroundColor:'#468faf',height:'10vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                   <MenuFoldOutlined style={{ fontSize: '32px',color:'whitesmoke'}}/>
                            </div>
                           
                            <Avatar size={32} icon={<UserOutlined />} onClick={()=>menuHandler()} />
                     </Header>
                            
              </div>
              )
 }

 export default PappBar;