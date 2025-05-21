export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { action, lock_address } = req.body;
  if (!lock_address || !["lock", "unlock"].includes(action)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  // Simulated logic (in real setup, wire to contract interaction)
  return res.status(200).json({
    message: `🔐 ${action === "lock" ? "Locked" : "Unlocked"} contract ${lock_address}`,
    timestamp: new Date().toISOString()
  });
}
