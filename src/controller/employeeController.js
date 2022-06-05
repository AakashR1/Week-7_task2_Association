const db = require('../db/db');
const Employee = db.employee;
const Department = db.department;

const addDepartment = async (req,res)=>{
    try {
        await Employee.create(req.body);
        res.send('Employee added...');
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

const employeeWithDepartment = async(req,res)=>{
    try {
        const data = await Employee.findAll({include:Department});
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}


module.exports = {addDepartment,employeeWithDepartment}