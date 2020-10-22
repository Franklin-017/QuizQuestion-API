const express = require('express');
const connectDB = require('./config/db');

require('dotenv').config({ path: './config/.env' });
//Initialize express
const app = express();

//Middleware
app.use(express.json());

app.use('/api', require('./routers/questions'));

//Database Connect
connectDB();

//Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
