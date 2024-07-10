const express = require('express');
const path = require('path');


const app = express();
const PORT = 5000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('layout', {
    title: 'Home',
    body: 'pages/home'
  });
});

app.get('/about', (req, res) => {
  res.render('layout', {
    title: 'About',
    body: 'pages/about'
  });
});
app.get('/login', (req, res) => {
  res.render('login')
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
