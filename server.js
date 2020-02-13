const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/expenses', require('./routes/expenses'));
app.use('/api/v1/incomes', require('./routes/incomes'));
app.use('/api/v1/goal', require('./routes/goal'));
app.use('/api/v1/rate', require('./routes/rate'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is running...'));
