const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout/main', {
        title: 'Home',
        body: '../pages/home'
    })
})
router.get('/logout', (req, res) => {
    res.clearCookie('uid');
    res.redirect('/');
});
router.get('/products', (req, res) => {
    res.send(404);
})
module.exports = router