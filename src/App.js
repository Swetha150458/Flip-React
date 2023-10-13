import logo from './logo.svg';
import  './css/bootstrap.css'
import './App.css';
import Fsearch from './components/Fsearch'; 
import Flipkart from './components/Flipkart'
import Banner from './components/Banner'
import Cards from './components/cards'
import Forms from './components/Forms'
import React from 'react';

function App() {
  return (
    <>
    <div className='container-fluid sample'>
      
      <div className='row'>
        
        <Fsearch />
      </div>
      <div className='row' >
        <Flipkart />
      </div>
      <div className='row'>
        <Banner />
      </div>
      <Cards/>
      <Forms />
    
    </div>

    </>
  );
}

export default App;
