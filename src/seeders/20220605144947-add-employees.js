'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Employees', [
        {
          "employee_name":"aakash",
          "employee_email":"aakash@gmail.com",
          "employee_password":"aakash1234",
          "department_Id":"3",
          "experience":"2"
      },
      {
          "employee_name":"vivek",
          "employee_email":"vivek@gmail.com",
          "employee_password":"vivek1234",
          "department_Id":"1",
          "experience":"2"
      },
      {
          "employee_name":"Rahul",
          "employee_email":"Rahul@gmail.com",
          "employee_password":"Rahul1234",
          "department_Id":"4",
          "experience":"4"
      },
      {
          "employee_name":"herry",
          "employee_email":"herry@gmail.com",
          "employee_password":"herry1234",
          "department_Id":"1",
          "experience":"5"
      },
      {
          "employee_name":"Pritesh",
          "employee_email":"Pritesh@gmail.com",
          "employee_password":"Pritesh1234",
          "department_Id":"4",
          "experience":"5"
      },
      {
          "employee_name":"Keyur",
          "employee_email":"Keyur@gmail.com",
          "employee_password":"Keyur1234",
          "department_Id":"1",
          "experience":"10"
      },
      {
          "employee_name":"Ketan",
          "employee_email":"Ketan@gmail.com",
          "employee_password":"Ketan1234",
          "department_Id":"3",
          "experience":"2"
      }  
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Employees', null, {});
     
  }
};
