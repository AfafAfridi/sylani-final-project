const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logger = require('../logger');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      logger.info(`Registration attempt with already registered email: ${email}`);
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    logger.info(`New user registered: ${email}`);
    res.status(201).json({ token });
  } catch (error) {
    logger.error(`Register Error: ${error.message}`);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
