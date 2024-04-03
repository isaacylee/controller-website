import axios from 'axios';
import express from 'express';

const app = express();
const port = 9090; // Choose a port for your proxy server

app.use(express.json());

app.post('/subscribe', async (req, res) => {
  try {
    const response = await axios.post(
      'https://lacontroller.us17.list-manage.com/subscribe/post', // Mailchimp API URL
      req.body, // Request body from the frontend
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    res.send(response.data); // Send Mailchimp API response back to the frontend
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});