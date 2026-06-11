const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const login_router = require ('../src/routes/login.js')


const app = express();
app.set('trust proxy', 1);  
app.use(cors());
app.use(helmet());
app.use(express.json());


app.use('/login' ,login_router );




app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(err.statuscode || 500).json({message:err.message , status:err.status})
})

app.listen(4000 , ()=>{console.log('server is listening on port 4000')})