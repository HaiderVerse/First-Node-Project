// Importing express module using ES6 import syntax
const express = require('express');

// Creating an instance of express Router
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
    res.render('layout/main', {
        title: 'Home',
        body: '../pages/home'
    });
});

// Exporting the router as a default export
module.exports = router;
