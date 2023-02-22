const express = require('express');
const cors = require('cors');
const error = require('./src/controllers/error');

const userRoutes = require('./src/routes/user')
const authRoutes = require('./src/routes/auth')
 
const app = express();

app.use(express.json());

app.use(cors({
    origin: " http://127.0.0.1:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  }))

app.use('/user',userRoutes)
app.use('/auth',authRoutes)


const PORT = process.env.PORT || 3000;


app.use(error.errorHandler)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})