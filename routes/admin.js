const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin_contoller');

router.get('/', adminController.admin)

module.exports = router; 