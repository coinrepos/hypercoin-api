// ✅ Backend API: /api/insurancePool.js
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      reserve: "542.1 HYPER",
      claims: 8,
      premiums: 91.33
    });
  }

  if (req.method === 'POST') {
    const { amount, from } = req.body;
    // Integrate with smart contract or database as needed
    return res.status(200).json({ status: '✅ Premium received', tx_hash: '0x123abc...' });
  }

  return res.status(405).end();
}
