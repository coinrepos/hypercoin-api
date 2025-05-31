export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { amount } = req.body;

  try {
    // Simulated burn result — replace with real integration if needed
    const tx_hash = `0xBURN_${Date.now().toString(36)}`;
    return res.status(200).json({ tx_hash });
  } catch (err) {
    return res.status(500).json({ error: 'Burn failed', details: err.message });
  }
}
