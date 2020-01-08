const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/expenses', require('./routes/expenses'));
app.use('/api/v1/incomes', require('./routes/incomes'));
// app.use('/api/v1/goal',require('./routes/expenses'));
// app.use('/api/v1/rate',require('./routes/expenses'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is running...'));
