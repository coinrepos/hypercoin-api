// 📁 File: src/components/ADAInterface.jsx
import React from 'react';

const ADAInterface = () => {
  return (
    <div style={{ background: '#1e3a8a', padding: '1rem', borderRadius: '8px' }}>
      <h3>🤖 ADA Interface</h3>
      <p>
        ADA assists with real-time recommendations, user support, and DAO liaison services.
        ADA is your intelligent personal assistant in the HyperOS ecosystem.
      </p>
      <ul>
        <li>🔍 Monitors system parameters</li>
        <li>📡 Queries DADA Mesh</li>
        <li>📥 Receives DAO voting prompts</li>
      </ul>
    </div>
  );
};

export default ADAInterface;


// 📁 File: src/components/DADAInterface.jsx
import React, { useState } from 'react';
import axios from 'axios';

const DADAInterface = () => {
  const [location, setLocation] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/dada-query`,
        { location }
      );
      setResponse(res.data.message);
    } catch (err) {
      setResponse('Error: ' + err.message);
    }
  };

  return (
    <div style={{ background: '#0c4a6e', padding: '1rem', borderRadius: '8px' }}>
      <h3>🌐 DADA Mesh Intelligence</h3>
      <p>DADA handles location, collateral checks, and integrates satellite APIs via DAO.</p>
      <input
        type="text"
        placeholder="Enter location or asset"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={handleQuery} style={{ padding: '0.5rem 1rem', background: '#22d3ee' }}>
        🔍 Query DADA
      </button>
      <p style={{ marginTop: '1rem' }}>{response}</p>
    </div>
  );
};

export default DADAInterface;
