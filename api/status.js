export default function handler(req, res) {
  return res.status(200).json({ status: "✅ HyperCoin API is online", timestamp: new Date().toISOString() });
}
