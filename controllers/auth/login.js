const USER = require('../../models/user');
const { setUser } = require('../../service/auth');
function displayLoginForm(req, res) {
    res.render('layout/auth', {
        title: 'Login',
        body: '../auth/login'
    });
}
async function handleLogin(req, res) {
    const { email, password } = req.body;
    try  {
        const foundUser = await USER.findOne({ email: email });
        if (!foundUser) {
            return res.render('layout/auth', {
                title: 'Login',
                body: '../auth/login',
                error: 'Email does not exist'
            });
        }
        if (foundUser.password !== password) {
            return res.render('layout/auth', {
                title: 'Login',
                body: '../auth/login',
                error: 'Incorrect password'
            });
        }
        res.cookie('uid', setUser(foundUser))
        res.redirect('/');
    }
    catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Server error' });
    }
   
}

module.exports = {
    displayLoginForm,
    handleLogin
};
