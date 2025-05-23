// 📁 src/components/HyperBurnPanel.jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const HyperBurnPanel = () => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleBurn = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/burn`, { amount });
      setStatus(`✅ Burned: ${res.data.tx_hash}`);
    } catch (err) {
      setStatus(`❌ Burn failed: ${err.message}`);
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>🔥 HyperBurn Panel</h3>
      <input
        type="number"
        placeholder="Amount to burn"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleBurn}>Burn</button>
      <p>{status}</p>
    </div>
  );
};

export default HyperBurnPanel;