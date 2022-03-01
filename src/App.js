import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  Layout  from './components/layout/baseLayout';
import React,{useState} from 'react';
import store from './redux/store/store';
import {Provider} from 'react-redux'

function App() {

  return (
    <div className="App" >
      <Provider store={store}>
        <Layout/>
      </Provider>
    </div>
  );
}

export default App;
