// File: /api/setLockContract.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { lock_address } = req.body;
  if (!lock_address) {
    return res.status(400).json({ error: 'Lock address is required' });
  }

  try {
    const tx_hash = `0xMockLockTx_${Date.now()}`;
    res.status(200).json({ message: `Lock contract set to ${lock_address}`, tx_hash });
  } catch (err) {
    console.error('Lock setup failed:', err);
    res.status(500).json({ error: 'Set lock operation failed' });
  }
}
