import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Details.css";

const Details = () => {
  const navigate = useNavigate();
  const [imageDetails, setImageDetails] = useState(null);
  const [error, setError] = useState(null); // Add state for error handling
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/getevent_detail/${id}`);
        setImageDetails(response.data);
      } catch (error) {
        setError(error); // Set error state
      }
    };

    fetchDetails();
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">Error fetching details: {error.message}</div>; // Display error message
  }

  if (!imageDetails) {
    return <p>Loading...</p>;
  }

  const { name, details, venue, date, image, registrationlink } = imageDetails;

  const Register = () => {
    navigate("/registerform");
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">{name}</h3>
          <div className="row">
            {/* Image Display */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img 
                src={image} 
                alt={name} 
                className="img-fluid rounded shadow-sm" 
                style={{ maxWidth: '90%', maxHeight: '500px' }} 
              />
            </div>
            {/* Event Details */}
            <div className="col-md-6">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Event Details</th>
                    <td>{details}</td>
                  </tr>
                  <tr>
                    <th scope="row">Venue</th>
                    <td>{venue}</td>
                  </tr>
                  <tr>
                    <th scope="row">Date</th>
                    <td>{new Date(date).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th scope="row">Registration Link</th>
                    <td>
                      <a href={registrationlink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        {registrationlink}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Register Button */}
          <div className="text-center mt-4">
            <button className="btn btn-success btn-lg" onClick={Register}>
              Register for Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
