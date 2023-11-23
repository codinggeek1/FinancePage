import React, { useState } from 'react';
import './Dashboard.css'; // Import your external stylesheet

function Dashboard({ walletAddress }) {
  const [stakedAmount, setStakedAmount] = useState(0);
  const [isStaking, setIsStaking] = useState(false);

  const handleStake = () => {
    // Your logic for staking
    setIsStaking(true);
    // Assuming you update the staked amount after a successful stake
    setStakedAmount(/* Updated staked amount */);
  };

  const handleRedeem = () => {
    // Your logic for redeeming
    setIsStaking(false);
    // Assuming you update the staked amount after a successful redemption
    setStakedAmount(/* Updated staked amount */);
  };

  return (
    <div className="Token">
      <div className="Button">
        <div className="ConnectWallet">Connect wallet</div>
      </div>
      <div className="Rectangle2"></div>
      <div className="FormButton">
        <div className="Stake" onClick={handleStake}>Stake</div>
      </div>
      <div className="FormButton" style={{ background: '#C7CBCD' }} onClick={handleRedeem}>
        <div className="Redeem">Redeem</div>
      </div>
      <div className="FormLabel">
        <div className="DivScHknohe">
          <div className="AvailableToStake1200Usdc">Available To Stake<br />1200 USDC</div>
          <div className="StakedAmount00Crusdc">Staked Amount<br />{stakedAmount} crUSDC</div>
          <div className="CreateApr100">Create APR<br />100%</div>
          <div className="Rectangle3"></div>
          <div className="Hgfdgfdh98gfdd">HGFDGFDH.....98GFDD</div>
        </div>
        <img className="Ellipse1" src="https://via.placeholder.com/19x20" alt="Ellipse1" />
      </div>
      <div className="YouWillReceive">You will receive</div>
      <div>{isStaking ? '0' : stakedAmount}</div>
      <div className="Crusdc">crUSDC</div>
      <div className="ExchangeRate">Exchange rate</div>
      <div className="Crusdc1Usdc">1 crUSDC = 1 USDC</div>
      <div className="SectionHeading2LidoStatistics">Create Transaction</div>
      <div className="SectionLinkViewOnEtherscan">View on Etherscan</div>
      <div className="KeepYourAssetsLiquid">Keep your assets liquid</div>
      <div className="Rectangle8"></div>
    </div>
  );
}

export default Dashboard;
