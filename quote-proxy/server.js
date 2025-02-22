// server.js

const express = require("express"); // Import Express framework
const axios = require("axios"); // Import Axios for making HTTP requests
const cors = require("cors");
const app = express(); // Create an Express application

// Enable CORS for all routes
app.use(cors());

// Define a route to fetch quotes
app.get("/api/quote", async (req, res) => {
  try {
    // Make a request to the ZenQuotes API
    const response = await axios.get("https://zenquotes.io/api/random");
    // Send the API response data back to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors and send a 500 status code
    res.status(500).send("Error fetching quote");
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
