import { React, useState, useEffect} from 'react';
import logoImage from './logo.png';
import './Home.css';

export default function Header({connectWallet}) {
    return (
        <>
          <header>
            <div id="logo">
              <img src={logoImage} alt="Logo" />
            </div>
            <button id="connect-button-top" onClick={connectWallet}>
              Connect Wallet
            </button>
          </header>
        </>
    )
}
