export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { lock_address } = req.body;

  if (!lock_address) {
    return res.status(400).json({ message: 'Missing lock_address' });
  }

  // Simulated lock setting logic
  const tx_hash = `0xlockfake${Math.floor(Math.random() * 1e16).toString(16)}`;
  res.status(200).json({ message: 'Lock contract set', tx_hash });
}
