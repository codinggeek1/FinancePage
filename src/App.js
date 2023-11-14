// src/App.js
import React from 'react';
import './App.css'; // You can import your CSS file here
import logoImage from '/Users/pardhivvarma/Documents/my-react-app/src/logo.png';

function App() {
  return (
    <>
     <header>
        <div id="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <button id="connect-button-top">Connect Wallet</button>
      </header>

      <div id="content">
        <p className="keep-assets-liquid">Keep your assets liquid</p>
        <div className="text-box">
          <input type="text" placeholder="Usdc amount MAX" />
          <button className="connect-button-inside-box">Connect Wallet</button>
        </div>
        <p className="custom-text">You will receive crUSDC</p>
        <p className="exchange-rate">Exchange rate: </p>
        <p className="conversion">1 crUSDC = 1 USDC</p>
        <button className="view-etherscan">View on Etherscan</button>
        <button className="create-transaction">Create Transaction</button>
      </div>
    </>
  );
}

export default App;
