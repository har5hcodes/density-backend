const express = require('express');
const router = express.Router();

const transactionControllers = require('../controllers/transaction-controller');

router.post('/create',transactionControllers.addTransaction);
// router.post('/update', userControllers.updateUser);

module.exports = router;
