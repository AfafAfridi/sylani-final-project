import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Added Link here
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <h1>Welcome to Saylani Welfare</h1>
          <p>The largest NGO offering free Monthly family support</p>
          <Link to="/login" className="explore-button">Get Started</Link> {/* This is where Link is used */}
        </div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
