// File: C:\Projects\HYPERCOIN_API-backend\api\dao\vote.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { proposalId, vote } = req.body;

  if (!proposalId || typeof vote !== 'boolean') {
    return res.status(400).json({ error: 'Invalid input: proposalId and vote are required.' });
  }

  try {
    // ✅ Mock success response (replace with blockchain call or DB entry)
    const result = {
      message: `Vote recorded for proposal #${proposalId}`,
      vote,
      tx_hash: '0xMockTxHash'
    };

    return res.status(200).json(result);
  } catch (err) {
    console.error('Voting error:', err);
    return res.status(500).json({ error: 'Failed to record vote' });
  }
}
