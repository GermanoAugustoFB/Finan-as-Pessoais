const express = require('express');
const jwt = require('jsonwebtoken');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

const router = express.Router();

router.use(async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).send('Authorization header missing');
    }

    const token = authHeader.replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = await User.findById(decoded.id);
        if (!req.user) {
            return res.status(401).send('User not found');
        }
        next();
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
});


router.post('/', async (req, res) => {
    const { type, category, amount } = req.body;
    const transaction = new Transaction({
        userId: req.user._id,
        type,
        category,
        amount
    });
    await transaction.save();
    res.status(201).send('Transaction recorded');
});

router.get('/', async (req, res) => {
    const transactions = await Transaction.find({ userId: req.user._id });
    res.json(transactions);
});

module.exports = router;
