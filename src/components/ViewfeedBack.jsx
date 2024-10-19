import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const ViewFeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3030/Viewuserfeedback');
      setFeedbackData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setError('Failed to load feedback. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {feedbackData.map((value, index) => (
                <div key={index} className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="https://img.freepik.com/free-vector/emotional-feedback-concept-illustration_114360-17635.jpg?t=st=1728671794~exp=1728675394~hmac=02c1eaa922b1443eb44ede63b16fec9d9ee32faca946f5cb9f4ee213f1b9ddce&w=740" className="img-fluid rounded-start" alt="Feedback Illustration" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{value.eventName}</h5>
                          <p className="card-text">{value.feedback}</p>
                          <p className="card-text"><small className="text-body-secondary">Posted on {new Date(value.postedDate).toLocaleDateString()}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFeedback;