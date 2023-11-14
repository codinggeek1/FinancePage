// src/App.js
import React from 'react';
import './App.css'; // You can import your CSS file here
import logoImage from '/Users/pardhivvarma/Documents/my-react-app/src/logo.png';

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      // Request account access if needed
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accs) => setAccounts(accs))
        .catch((err) => console.error(err));
    } else {
      console.error('MetaMask not detected! Please install MetaMask.');
    }
  }, []);

  const handleConnectWallet = async () => {
    try {
      // Request account access if needed
      const connectedAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(connectedAccounts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header>
        <div id="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <button id="connect-button-top" onClick={handleConnectWallet}>
          {accounts.length > 0 ? `Connected: ${accounts[0]}` : 'Connect Wallet'}
        </button>
      </header>

      <div id="content">
        <p className="keep-assets-liquid">Keep your assets liquid</p>
        <div className="text-box">
          <input
            type="text"
            placeholder="   USDC amount                                                                              MAX"
          />
          <button className="connect-button-inside-box" onClick={handleConnectWallet}>
            {accounts.length > 0 ? `Connected: ${accounts[0]}` : 'Connect Wallet'}
          </button>
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
