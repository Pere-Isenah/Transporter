const express = require('express');
const { GET } = require('./api/search-address/route');

const app = express();
const PORT = process.env.PORT || 5173; // Set the port to 5173

// Define middleware to parse JSON requests
app.use(express.json());

// Define the route and use the route handler
app.get('/api/search-address', async (req, res) => {
    await GET(req, res);
});

// Serve the React app (assuming Vite is outputting to the 'build' directory)
app.use(express.static('build'));

// For all other requests, serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});