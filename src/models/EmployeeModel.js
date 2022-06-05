

module.exports = (sequelize, Datatypes)=>{
    const Employee = sequelize.define('Employee',{
        employee_Id :{
            type:Datatypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        employee_name:{
            type:Datatypes.STRING,
            allowNull:false
        },
        employee_email:{
            type:Datatypes.STRING,
            allowNull:false
        },
        employee_password:{
            type:Datatypes.STRING,
            allowNull:false
        }
    })
    
    return Employee;
}