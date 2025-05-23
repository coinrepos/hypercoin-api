export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { adminPin } = req.body;

    if (adminPin !== process.env.ADMIN_PIN) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    return res.status(200).json({ status: 'unlocked', message: 'Burn zone access granted' });
  } catch (err) {
    return res.status(500).json({ error: 'Unlock failed', details: err.message });
  }
}
