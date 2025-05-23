const res = await fetch('/api/dada-query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: userInput })
});
const data = await res.json();
