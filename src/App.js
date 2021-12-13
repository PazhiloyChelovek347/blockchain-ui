import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Web3 from 'web3';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import StartPage from './pages/StartPage/StartPage';
import OwnerPage from './pages/ProfilePages/OwnerPage';
import { abi } from './abi';

const web3 = new Web3('http://127.0.0.1:7545');
const contract = new web3.eth.Contract(abi, '0x6A3E27113A791BBD0F86Aa76403a5f4893855d98', {gas: '1000000'});

function App() {
  const { role } = useSelector((store) => store.basicReducer);
  console.log(role);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {/* <StartPage /> */}
        <Routes>
          <Route path="/" element={<StartPage contract={contract} />} />
          {!!role && <Route path="/users/:address" element={<OwnerPage />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
