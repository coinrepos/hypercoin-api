import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { wrappedHyperCoinAddress, wrappedHyperCoinABI } from './contracts/wrappedHyperCoin';

const WrappedHyperCoinDashboard = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const tempSigner = tempProvider.getSigner();
        const tempContract = new ethers.Contract(wrappedHyperCoinAddress, wrappedHyperCoinABI, tempSigner);

        setProvider(tempProvider);
        setSigner(tempSigner);
        setContract(tempContract);
      } else {
        console.error('Please install MetaMask!');
      }
    };

    init();
  }, []);

  const getBalance = async () => {
    if (contract) {
      const userAddress = await signer.getAddress();
      const userBalance = await contract.balanceOf(userAddress);
      setBalance(ethers.utils.formatUnits(userBalance, 18));
    }
  };

  return (
    <div>
      <h1>Wrapped HyperCoin Dashboard</h1>
      <button onClick={getBalance}>Get Balance</button>
      {balance && <p>Your balance: {balance} WHC</p>}
    </div>
  );
};

export default WrappedHyperCoinDashboard;
