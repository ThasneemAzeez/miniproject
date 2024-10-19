import axios from 'axios'
import React, { useState, useEffect } from 'react'


const UserFeedback = () => {

  const [input, setInput] = useState({
    eventName: "",
    feedback: "",
  })

  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch existing feedback (if applicable)
    // ... (your logic to retrieve existing feedback)
  }, [])

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  const readValues = async (event) => {
    event.preventDefault();

    // Validate input (consider using a validation library)
    if (!input.eventName.trim() || !input.feedback.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3030/userfeedback",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      if (response.data.status === "Success") {
        alert("Feedback Added Successfully!!!")
        setInput({ eventName: "", feedback: "" })
        setError(null)
      } else {
        alert("Something went Wrong!!!")
        setError(response.data.error || "Error submitting feedback.")
      }
    } catch (error) {
      console.error(error)
      setError("Error submitting feedback. Please try again later.")
    }
  }

  return (
    <div>
      
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://cdn.botpenguin.com/assets/website/User_Feedback_d4677ac183.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="eventName">Event Name:</label>
                      <input type="text" className="form-control" id="eventName" name="eventName" value={input.eventName} onChange={inputHandler} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="feedback">Feedback:</label>
                      <textarea className="form-control" id="feedback" name="feedback" rows="5" value={input.feedback} onChange={inputHandler}></textarea>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button onClick={readValues} className="btn btn-primary">Submit Feedback</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserFeedback