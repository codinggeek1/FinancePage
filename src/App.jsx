// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home connectWallet={connectWallet} />}
        />
        <Route
          path="/Dashboard"
          element={walletConnected ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
