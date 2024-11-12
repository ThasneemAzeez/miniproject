import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FrontPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3030/getevent_detail");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data', error);
      setError('Failed to load data. Please try again later');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Feedback = () => {
    navigate("/feedback");
  };
  
  const ViewFeedback = () => {
    navigate("/viewfeedback");
  };

  return (
    <div>
      <Navbar />

      {/* Carousel with Dynamic Images */}
      <div className="carousel-container">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {data.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={item.image} className="d-block w-100" alt={item.name} style={{width:'80px', height: '600px', objectFit: '' }} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Container for Cards */}
      <div className="container my-5">
        <div className="row g-4">
          {data.map((value, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={value.image} className="card-img-top" alt="Event" style={{ height: '300px', objectFit: '' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{value.name}</h5>
                  <Link to={`/details/${value._id}`} className="btn btn-primary mt-auto">
                    To Know More Click Here
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Buttons */}
      <div className="text-center mt-4">
        <button onClick={Feedback} className="btn btn-success btn-lg">
          Write your feedback
        </button>
      </div>
      <div className="text-center mt-4">
        <button onClick={ViewFeedback} className="btn btn-success btn-lg">
          View Feedback
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
