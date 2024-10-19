import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
  const [data, setData] = useState({
    name: "",
    details: "",
    venue: "",
    date: "",
    poster: "", // Store base64 encoded image data here
    registrationlink: "",
  });

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const convertToBase64 = (event) => {
    const reader = new FileReader();
    reader.onload = () => setData({ ...data, poster: reader.result });
    reader.readAsDataURL(event.target.files[0]);
  };

  const readValue = async () => {
    try {
      const response = await axios.post("http://localhost:3030/event_details", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.status === "success") {
        alert("Successfully added event!");
        // Clear form data or handle success state here
      } else {
        alert("Error adding event. Please check the details and try again.");
      }
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };


  return (
    <div>

      <center>FORM</center><br></br>
      <div className="container">
        <div className="row g-3">
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="name" className="from-label">Name</label>
          </div>
          <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <input type="text" className="form-control" onChange={inputHandler} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="details" className="form-label">Details</label>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <input type="text" className="form-control" onChange={inputHandler} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="venue" className="form-label">Venue</label>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <input type="text" className="form-control" onChange={inputHandler} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="date" className="form-label">Date</label>

          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <input type="datetime-local" name="date" id="date" className='form-control' onChange={inputHandler} />

          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="poster" className="form-label">Poster</label>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <input type="file" name="poster" id="poster" className="form-control" onChange={convertToBase64} />
            {data == " " || data == null ? "" : <img width={100} height={100} src={data} />}
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="registrationlink" className="form-label">Registration Link</label>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <input type="text" className="form-control" onChange={inputHandler} />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <center><button className="btn btn-success" onClick={readValue} >Submit</button></center>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"></div>
        </div>
      </div>
    </div>
  )
}

export default Form 