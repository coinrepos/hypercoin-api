// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load ABI and Contract
const abiPath = path.join(__dirname, 'abi', 'wrappedHyperCoinABI.json');
const contractABI = JSON.parse(fs.readFileSync(abiPath));
const contractAddress = '0xB8Ce1CA8e08d2D67CF029527C4ffe656DE801AD5';

const provider = new ethers.providers.JsonRpcProvider('https://public-node.testnet.rsk.co');
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Route: Deploy DAO
app.post('/api/deployDAO', async (req, res) => {
  try {
    const tx = await contract.deployDAO();
    const receipt = await tx.wait();
    res.json({ tx_hash: receipt.transactionHash });
  } catch (error) {
    console.error('Deploy DAO error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route: Mint LuckyCoin
app.post('/api/mintLuckyCoin', async (req, res) => {
  try {
    const { to, amount } = req.body;
    const tx = await contract.mintLuckyCoin(to, amount);
    const receipt = await tx.wait();
    res.json({ tx_hash: receipt.transactionHash });
  } catch (error) {
    console.error('Mint LuckyCoin error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route: USD to Wei converter
app.get('/api/convert/usd-to-wei', (req, res) => {
  const { usd } = req.query;
  if (!usd || isNaN(usd)) {
    return res.status(400).json({ error: 'Invalid or missing USD value' });
  }
  const ethPerUsd = 0.00039604;
  const wei = BigInt(Math.floor(parseFloat(usd) * ethPerUsd * 1e18));
  res.json({ wei: wei.toString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
