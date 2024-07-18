const { getUser } = require('../service/auth');

function restrictToLoginedUser(req, res, next) {
    const userId = req.cookies?.uid;
    console.log(userId);
    if (!userId) return res.status(403).redirect('/login');
    const user = getUser(userId);
    if (!user) return res.status(403).redirect('/login');
    req.user = user;
    next();  // Only call next() if the user is authenticated
}
function checkAuth(req, res, next) {
    const uid = req.cookies?.uid;
    if (uid) {
        res.locals.user = getUser(uid); // Assuming getUser retrieves user from cookie
    } else {
        res.locals.user = null;
    }
    next();
}
function cheakLogined(req, res, next) {
    const uid = req.cookies?.uid;
    if(!uid) return next();
    if(uid) res.redirect('/');
    next();
}
module.exports = { restrictToLoginedUser, checkAuth, cheakLogined };
