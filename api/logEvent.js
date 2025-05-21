export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { event, metadata } = req.body;
  if (!event || typeof event !== "string") {
    return res.status(400).json({ error: "Event type required" });
  }

  // Placeholder: Store or forward to logging service
  console.log("📊 Event logged:", event, metadata);
  return res.status(200).json({ message: "Event logged", event });
}
