// Importing express module using ES6 import syntax
import express from 'express';

// Creating an instance of express Router
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
    res.render('layout/main', {
        title: 'Home',
        body: '../pages/home'
    });
});

// Route for the login page
router.get('/login', (req, res) => {
    res.render('layout/auth', {
        title: 'Login',
        body: '../auth/login'
    });
});

// Route for the signup page
router.get('/signup', (req, res) => {
    res.render('layout/auth', {
        title: 'Signup',
        body: '../auth/register'
    });
});

// Exporting the router as a default export
export default router;
