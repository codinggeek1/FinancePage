import React, { useState } from 'react';
import './Home.css';
import Header from './Header';
import Body  from './body';

export function Home({ connectWallet }) {
  return (
    <>
      <Header connectWallet={connectWallet} />
      
      <Body connectWallet={connectWallet} />
    </>
  );
}

export default Home;
