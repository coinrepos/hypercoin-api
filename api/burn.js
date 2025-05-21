// File: /api/burn.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ error: 'Amount is required' });
  }

  try {
    const tx_hash = `0xMockBurnTx_${Date.now()}`;
    res.status(200).json({ message: `Burned ${amount} wei`, tx_hash });
  } catch (err) {
    console.error('Burn failed:', err);
    res.status(500).json({ error: 'Burn operation failed' });
  }
}
