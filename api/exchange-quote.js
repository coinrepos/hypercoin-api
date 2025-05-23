// /api/exchange-quote.js
export default function handler(req, res) {
  const { tokenIn, tokenOut, amount } = req.query;

  if (!tokenIn || !tokenOut || !amount) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  // Example simulated price logic
  const rate = 1.05; // Fake exchange rate
  const output = parseFloat(amount) * rate;

  res.status(200).json({
    tokenIn,
    tokenOut,
    amountIn: amount,
    estimatedOut: output.toFixed(6),
    rate,
    note: 'Fake rate for dev/test environment'
  });
}
