const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to CI/CD Demo API' });
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Priya' },
    { id: 3, name: 'Amit' }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;