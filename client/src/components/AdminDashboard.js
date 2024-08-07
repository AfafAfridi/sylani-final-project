import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
const AdminDashboard = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/feedback');
      setFeedbackData(response.data);
    };

    fetchData();
  }, []);

  const data = {
    labels: [
      "Quality of Product",
      "Customer Service",
      "Recommend to Others",
      "Value for Money",
      "Website Navigation",
      "Delivery Time",
      "Product Packaging",
      "Customer Support",
      "Range of Products",
      "Purchase Again"
    ],
    datasets: [
      {
        label: 'Average Rating',
        data: feedbackData.map(item => item.averageRating),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Bar data={data} />
    </div>
  );
};

export default AdminDashboard;
