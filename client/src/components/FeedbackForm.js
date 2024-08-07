import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

const questions = [
  "How would you rate the quality of the courses?",
  "How satisfied are you with the instructors?",
  "How likely are you to recommend our institute to others?",
  "How would you rate the value for money of the courses?",
  "How easy was it to access the course materials?",
  "How satisfied are you with the support services?",
  "How would you rate the online learning platform?",
  "How helpful was the administrative staff?",
  "How satisfied are you with the range of courses available?",
  "How likely are you to enroll in another course with us?"
];

const FeedbackForm = () => {
  const [ratings, setRatings] = useState(Array(questions.length).fill(0));

  const handleRatingChange = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback/submit', { ratings });
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        {questions.map((question, index) => (
          <div key={index} className="form-group">
            <label>{question}</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={value}
                    checked={ratings[index] === value}
                    onChange={() => handleRatingChange(index, value)}
                    required
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
