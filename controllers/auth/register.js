const USER = require('../../models/user');

function displaySignupForm(req, res) {
    res.render('layout/auth', {
        title: 'Signup',
        body: '../auth/register'
    });
}

async function registerUser(req, res) {
    const user = req.body;
    try { 
        const result = await USER.create({
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            gender: user.gender,
            email: user.email,
            password: user.password
        });
        res.redirect('/login');
    } catch (error) {
        console.error(error);

        // Check if the error is a validation error for password
        let errorMessage = 'An error occurred';
        if (error.errors && error.errors.password) {
            errorMessage = error.errors.password.message;
        } else if (error.code === 11000) { // Duplicate key error (email already exists)
            errorMessage = 'Email already exists';
        }

        return res.render('layout/auth', {
            title: 'Signup',
            body: '../auth/register',
            error: errorMessage
        });
    }
}
module.exports = {
    displaySignupForm,
    registerUser
};
