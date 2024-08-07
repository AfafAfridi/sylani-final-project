// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const adminAuth = require('../middleware/adminAuth');
const logger = require('../logger');

// Submit Feedback Route
router.post('/submit', async (req, res) => {
  const { ratings } = req.body;
  try {
    const feedback = new Feedback({ ratings });
    await feedback.save();
    res.status(201).send('Feedback submitted successfully');
  } catch (error) {
    logger.error(`Submit Feedback Error: ${error.message}`);
    res.status(500).send('Server error');
  }
});

// Get Feedback Route
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    const feedbackData = feedbacks.map(fb => {
      const averageRating = fb.ratings.reduce((a, b) => a + b, 0) / fb.ratings.length;
      return { averageRating };
    });
    res.status(200).json(feedbackData);
  } catch (error) {
    logger.error(`Get Feedback Error: ${error.message}`);
    res.status(500).send('Server error');
  }
});

// Protected Admin Route to Get All Feedbacks
router.get('/admin/feedbacks', adminAuth, async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    logger.error(`Get All Feedbacks Error: ${error.message}`);
    res.status(500).send('Server error');
  }
});

module.exports = router;
