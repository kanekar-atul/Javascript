const express = require('express');
const app = express(); 
const dotenv =  require('dotenv');
const authRouter = require('./routes/auth');

app.use('/api/user',authRouter);
app.listen(3000,() =>{ console.log('Up & Running...'); });