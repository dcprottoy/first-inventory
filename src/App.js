import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import  Content  from './components/layout/content';
import React,{useState} from 'react';
function App() {

  const [sideBarOpen,setSideBarOpen] = useState(true);

  return (
    <div className="App">
     
     <Header setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen}/>
     <div style={{display:'flex'}}>
      <Sidebar sideBarOpen={sideBarOpen}/>
      <Content/>
      </div>
    </div>
  );
}

export default App;
