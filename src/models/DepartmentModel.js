

module.exports = (sequelize, Datatypes)=>{
    const Department = sequelize.define('Department',{
        department_Id :{
            type:Datatypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        department_name:{
            type:Datatypes.STRING
        },
        Icon:{
            type:Datatypes.STRING,
            allowNull:false   
        }
    })

    return Department;
}