import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Web3 from 'web3';

function App() {
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Instantiate Web3 with the current provider
          const web3 = new Web3(window.ethereum);

          // Your additional wallet connection logic if needed

          // Wallet is connected
          setWalletConnected(true);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask not found. Please install MetaMask extension.');
      }
    };

    // Call the connectWallet function
    connectWallet();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={walletConnected ? <Dashboard /> : <Home />} />
        {/* Use Navigate inside a Route component for programmatic navigation */}
        <Route
          path="/redirect-home"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
