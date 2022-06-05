const db = require('../db/db');
const Employee = db.employee;
const Department = db.department;


const addDepartment  = async (req,res)=>{
    try {
        await Department.create(req.body);
        res.send('Department added successfully....');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const departmentWithEmployee = async(req,res)=>{
    try {
        const data = await Department.findAll({include:Employee});
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports ={ addDepartment,departmentWithEmployee}