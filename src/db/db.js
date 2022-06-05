const dotenv = require('dotenv').config();
const env = dotenv['parsed']['NODE_ENV'];
const config = require('../config/dbConfig.json')[env];

const {Sequelize , DataTypes} = require('sequelize');


const sequelize = new Sequelize(config.database, config.user, config.password, config);

const CheckaConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection Done.....');
    } catch (error) {
        console.log(error.message);
    }
};
CheckaConnection();


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('../models/EmployeeModel.js')(sequelize,DataTypes);
db.department = require('../models/DepartmentModel.js')(sequelize,DataTypes);

db.sequelize.sync({force:false})
.then(()=>{
    console.log('sync done...');
});
db.department.hasMany(db.employee,{foreignKey:'department_Id'});
db.employee.belongsTo(db.department,{foreignKey:'department_Id'});

module.exports = db;