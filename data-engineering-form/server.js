const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Form Data Received:', formData);

  // Save to database or send an email
  // Example: Save to a JSON file (for demonstration purposes)
  const fs = require('fs');
  fs.appendFile('submissions.json', JSON.stringify(formData) + '\n', (err) => {
    if (err) throw err;
    console.log('Form data saved!');
  });

  res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
