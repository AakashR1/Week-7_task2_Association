require('dotenv').config();
const express = require('express')
const app = express();
const departmentRouter = require('./router/departmentRouter');
const employeeRouter = require('./router/employeeRouter');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/employee',employeeRouter);
app.use('/department',departmentRouter);

const path = require('path');
const PORT = process.env.PORT;
app.listen(PORT,(error)=>{
    if(error) throw error;
    console.log(`server is listening at port ${PORT}`);
});
