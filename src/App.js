import './App.css';
import 'antd/dist/antd.css';
import  Layout  from './components/layout/baseLayout';
import React,{useState} from 'react';
import store from './redux/store/store';
import {Provider} from 'react-redux'
import Form from './Form';
function App() {

  return (
    <div className="App" >
      {/* <Provider store={store}>
        <Layout/>
      </Provider> */}
      <Form/>
    </div>
  );
}

export default App;
