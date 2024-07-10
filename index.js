import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import router from './routes/static.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url)); 

const app = express();
const PORT = 5000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
