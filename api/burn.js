export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount } = req.body;

    // 🔧 Replace with actual smart contract burn logic
    // const txHash = await smartContract.burn(amount);

    return res.status(200).json({ tx_hash: '0xMockBurnTransactionHash', status: 'success' });
  } catch (err) {
    return res.status(500).json({ error: 'Burn failed', details: err.message });
  }
}
