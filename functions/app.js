// app.js
const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

app.use(express.json());

app.post('/webhook', (req, res) => {
  const { event, payload } = req.body;
  if (event === 'deployment') {
    const deploymentURL = payload?.targetUrl;
    console.log('New Vercel Deployment:', deploymentURL);
    // Send an alert/notification here (e.g., email, SMS, Slack, etc.)
    res.status(200).send('Received Vercel Deployment Event');
  } else {
    res.status(400).send('Invalid Event Type');
  }
});

app.listen(port, () => {
  console.log(`Webhook server is running on port ${port}`);
});
