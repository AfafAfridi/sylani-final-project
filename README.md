# Feedback App

A full-stack web application for collecting and managing feedback. The application allows users to register, log in, provide feedback, and view feedback reports. Admins can access an admin dashboard to analyze feedback data and view user activity.

## Technologies Used

- **Frontend:**
  - React.js
  - Axios
  - CSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT (JSON Web Token) for authentication

- **Development Tools:**
  - npm or yarn for package management
    

- **Deployment:**
  - Vercel 

## Project Structure


## Setup and Installation

### Frontend

1. Navigate to the `client` directory:
   ```bash
   cd client
   npm start


1. Navigate to the `server` directory:
   ```bash
   cd server
   node server.js
Frontend:

Access the app at http://localhost:3000.

Backend:

The server listens on http://localhost:5001.
Endpoints:
POST /api/auth/login - Login endpoint.

POST /api/auth/register - Registration endpoint.

POST /api/feedback - Submit feedback.

GET /api/feedback - Retrieve feedback (admin access).

things to do:
deploy this on vercel 
admin route or aurhenticatication issues
log in and sign up issue.

notes: question paper:
students fill feedback form and the data is shown as graphs on admin dashboard for analizying and making changes to make the students learning more efficient and purposeful.
- SMIT Teacher/Student Feedback Form:
 - Implement a user-friendly feedback form system for continuous improvement.
 - Analyze feedback data to enhance course content, teaching methodologies, and overall student
experience. 
