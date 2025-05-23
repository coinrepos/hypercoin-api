// 📁 src/components/SetLock.jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SetLock = () => {
  const [lockAddress, setLockAddress] = useState('');
  const [status, setStatus] = useState('');

  const handleSetLock = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/setLockContract`, { lock_address: lockAddress });
      setStatus(`✅ Lock Set: ${res.data.tx_hash}`);
    } catch (err) {
      setStatus(`❌ Lock failed: ${err.message}`);
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>🔐 Set Lock Contract</h3>
      <input
        type="text"
        placeholder="Lock Address"
        value={lockAddress}
        onChange={(e) => setLockAddress(e.target.value)}
      />
      <button onClick={handleSetLock}>Set Lock</button>
      <p>{status}</p>
    </div>
  );
};
