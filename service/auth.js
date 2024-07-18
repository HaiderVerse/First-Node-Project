const jwt = require('jsonwebtoken');
const secret = 'hasnain@gmail.com'

function setUser(user) {
    
    const uid = jwt.sign( {
        email: user.email,
        id: user._id
    }, secret);
    return uid;
}

function getUser(token) {
    return jwt.verify( token, secret);
}

module.exports = { setUser, getUser };