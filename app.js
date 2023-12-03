const express = require('express');
const app = express();
const port = 3000;

// cafe data 
const cafes = [
  {
    "id": "1",
    "name": "Breads Bakery",
    "location": "Union Square",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "French"
},
{
    "id": "2",
    "name": "Ole & Steen",
    "location": "Union Square",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Modern"
},
{
    "id": "3",
    "name": "outro nyc",
    "location": "Union Square",
    "wifi": false,
    "powerOutlets": false,
    "vibes": "Cozy"
},
{
    "id": "4",
    "name": "Devoción",
    "location": "Union Square",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Columbian"
},
{
    "id": "5",
    "name": "Artison Coffee Bar",
    "location": "Union Square",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Florist"
},
{
    "id": "6",
    "name": "Spot Dessert Bar",
    "location": "St Marks",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Trendy"
},
{
    "id": "7",
    "name": "Patisserie Fouet",
    "location": "Union Square",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "French"
},
{
    "id": "8",
    "name": "Blue Stripes Cacao Shop",
    "location": "Union Square",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Grunge"
},
{
    "id": "9",
    "name": "The Grey Dog",
    "location": "Chelsea",
    "wifi": false,
    "powerOutlets": false,
    "vibes": "Country"
},
{
    "id": "10",
    "name": "Sweet Moment",
    "location": "Chinatown",
    "wifi": false,
    "powerOutlets": true,
    "vibes": "Korean"
},
{
    "id": "11",
    "name": "La Colombe",
    "location": "SoHo",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Classy"
},
{
    "id": "12",
    "name": "% Arabica",
    "location": "Dumbo",
    "wifi": false,
    "powerOutlets": false,
    "vibes": "Japanese"
},
{
    "id": "13",
    "name": "Ralph's Coffee",
    "location": "Flatitron",
    "wifi": false,
    "powerOutlets": false,
    "vibes": "Chic"
},
{
    "id": "14",
    "name": "Blue Bottle Coffee",
    "location": "Union Square",
    "wifi": false,
    "powerOutlets": false,
    "vibes": "Classy"
},
{
    "id": "15",
    "name": "Lady M Cake Boutique",
    "location": "Flatitron",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Classy"
},
{
    "id": "16",
    "name": "Seven Grams Caffe",
    "location": "Flatitron",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Cozy"
},
{
    "id": "17",
    "name": "Hi-Collar",
    "location": "Chinatown",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Cozy"
},
{
    "id": "18",
    "name": "Cha-An",
    "location": "Chinatown",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Japanese"
},
{
    "id": "19",
    "name": "Gong Cha",
    "location": "St Marks",
    "wifi": false,
    "powerOutlets": false,
    "vibes": "Chinese"
},
{
    "id": "20",
    "name": "Starbucks Reserve Roastery",
    "location": "Chelsea",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Cozy"
},
{
    "id": "21",
    "name": "Prince Tea House",
    "location": "East Village",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Classy"
},
{
    "id": "22",
    "name": "HHD (Heuk Hwa Dang)",
    "location": "Koreatown",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Korean"
},
{
    "id": "23",
    "name": "Food Gallery 32",
    "location": "Koreatown",
    "wifi": false,
    "powerOutlets": false,
    "vibes": "Asian"
},
{
    "id": "24",
    "name": "Taiyaki NYC",
    "location": "Chinatown",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Japanese"
},
{
    "id": "25",
    "name": "Koré Coffee",
    "location": "Chinatown",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Korean"
},
{
    "id": "26",
    "name": "Bibble & Sip",
    "location": "Hell's Kitchen",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Cute"
},
{
    "id": "27",
    "name": "Variety Coffee Roasters",
    "location": "Hell's Kitchen",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Rustic"
},
{
    "id": "28",
    "name": "Koré Coffee",
    "location": "Chinatown",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Korean"
},
{
    "id": "29",
    "name": "Maman",
    "location": "Flatitron",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Cute"
},
{
    "id": "30",
    "name": "Sammy L Coffee",
    "location": "Stuytown",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Chill"
}

  // Add more cafes 
];

// endpoint
app.get('/cafes', (req, res) => {
  res.json(cafes);
});

// parameters
app.get('/cafes/search', (req, res) => {
  const { wifi, powerOutlets, vibes } = req.query;

  // Filter cafes based on parameters
  const filteredCafes = cafes.filter(cafe => {
    return (
      (wifi === undefined || cafe.wifi.toString() === wifi) &&
      (powerOutlets === undefined || cafe.powerOutlets.toString() === powerOutlets) &&
      (vibes === undefined || cafe.vibes.toLowerCase() === vibes.toLowerCase())
    );
  });

  res.json(filteredCafes);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
