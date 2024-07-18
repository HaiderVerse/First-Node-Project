const express = require('express');
const connectMongoDB = require('./connections/mongodb.js');
const cookieParser = require('cookie-parser');
const path = require('path');
const staticRouter = require('./routes/static.js');
const registeRouter = require('./routes/auth/register.js');
const loginRouter = require('./routes/auth/login.js');
const middleware = require('./middleware/auth.js')
// Connect to MongoDB

connectMongoDB('mongodb://127.0.0.1:27017/Node-First-Project')
.then(()=> {console.log('mongodb connection success')})
.catch(err=> {console.log(err)});


const app = express();
const PORT = 5000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/',middleware.checkAuth, staticRouter);
app.use('/signup', registeRouter);
app.use('/login',middleware.cheakLogined, loginRouter);
app.get('/home', middleware.restrictToLoginedUser, (req, res) => {
  res.render('layout/main', {
    title: 'Home',
    body: '../pages/home'
  });
})


app.all('*', (req, res) => {
  res.status(404).render('layout/main', {
    title: 'Home',
    body: '../pages/404'
  });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
