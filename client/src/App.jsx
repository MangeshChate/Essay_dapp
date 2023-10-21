import React from 'react';
import InputData from './components/InputData';
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from "ethers";
import abi from "./contractJson/Essay.json"
import Display from './components/Display';
import './App.css'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });
    const [connect , setConnected] = useState("click to connect metamask");

  
    const connectMetaMask = async () => {
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          setConnected("connected")
        } catch (error) {
          alert('Install Metamask');

        }
        
        const contractAddress ="0x770E6CbCb2e41736FdA0B94062579774Dd50D464";
        const contractABI = abi.abi;
  
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(provider);
  
        const signer = provider.getSigner();
  
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
        setState({ provider, signer, contract });
      } else {
        console.error('MetaMask is not installed or not accessible.');
      }
    };
  
  
  

  return (
    <div className='bck p-5' >
      <div className="container-fluid d-flex justify-content-end ">
        <button className="btn btn-dark rounded-0 shadow border-0 fw-bold font-monospace " onClick={connectMetaMask}>{connect}</button>
      </div>
      <h1 className="text-muted text-center font-monospace fw-bold p-5 ">
        Essay Dapp
      </h1>
      <InputData state={state} />
      <Display state={state}/>
    </div>
  );
}

export default App;
