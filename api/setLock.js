export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { lock_address } = req.body;

  try {
    // Simulated set lock result — replace with real logic
    const tx_hash = `0xLOCK_${Date.now().toString(36)}`;
    return res.status(200).json({ tx_hash });
  } catch (err) {
    return res.status(500).json({ error: 'SetLock failed', details: err.message });
  }
}
