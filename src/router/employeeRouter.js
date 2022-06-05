const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');

router.post('/addEmployee',employeeController.addDepartment);
router.get('/Employee',employeeController.employeeWithDepartment);
module.exports = router;