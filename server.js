const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serving static files (HTML, CSS, etc.)

// Fetch cafes from the provided website
async function getCafesData() {
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default('https://cafes-uvjp.onrender.com/cafes');
    const cafesData = await response.json();
    return cafesData;
  } catch (error) {
    console.error('Error fetching cafes:', error);
    return [];
  }
}

// Endpoint to retrieve cafes data
app.get('/cafes', async (req, res) => {
  const cafes = await getCafesData();
  res.json(cafes);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
