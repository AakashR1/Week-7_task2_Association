const express = require('express');
const router = express.Router();
const departmentController = require('../controller/departmentController');

router.post('/addDepartment',departmentController.addDepartment);
router.get('/Department',departmentController.departmentWithEmployee);

module.exports = router;