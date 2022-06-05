const employee = require('../model/EmployeeModel');

module.exports = (sequelize, Datatypes)=>{
    const Department = sequelize.define('Department',{
        department_Id :{
            type:Datatypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        department_name:{
            type:Datatypes.STRING
        }
    })

    return Department;
}