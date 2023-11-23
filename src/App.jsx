// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Web3 from 'web3';

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Instantiate Web3 with the current provider
        const web3 = new Web3(window.ethereum);

        // Your additional wallet connection logic if needed

        // Wallet is connected
        setWalletConnected(true);
        setWalletAddress(accounts[0]); // Assuming the first account is the connected wallet
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask not found. Please install MetaMask extension.');
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home connectWallet={connectWallet} />}
        />
        <Route
          path="/Dashboard"
          element={walletConnected ? <Dashboard walletAddress={walletAddress} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
