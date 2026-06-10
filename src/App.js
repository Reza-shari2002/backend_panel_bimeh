const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const refresh_router = require('../src/routes/refresh.js');
const login_router = require ('../src/routes/login.js')
const task_router = require('./routes/task.js');
const units_router = require('./routes/units.js');
const notifications_router = require('./routes/notification.js')

const app = express();
app.set('trust proxy', 1);  // ✅ بسیار مهم
app.use(cors());
app.use(helmet());
app.use(express.json());


app.use('/refresh' , refresh_router);
app.use('/login' ,login_router );
app.use('/tasks' ,task_router );
app.use('/units', units_router);
app.use('/notifications',notifications_router);


app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(err.statuscode || 500).json({message:err.message , status:err.status})
})

app.listen(4000 , ()=>{console.log('server is listening on port 4000')})