import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    details: "",
    venue: "",
    date: "",
    poster: "", // Store base64 encoded image data here
    registrationlink: "",
  });

  const convertToBase64 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      setData({ ...data, poster: reader.result });
    };
    reader.onerror = (error) => {
      console.error("Error converting file to base64:", error);
    };
  };

  const handleSubmitForm = async () => {
    console.log(data);
    // data.poster = "";
    try {
      const response = await fetch("http://localhost:3030/event_details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit event.");
      }
      alert("Successfully added event!");
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <main>
      <center>FORM</center>
      <br></br>
      <div className="container">
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="row g-3">
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="name" className="from-label">
                Name
              </label>
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <input
                type="text"
                className="form-control"
                onChange={(event) =>
                  setData({ ...data, name: event.target.value })
                }
              />
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="details" className="form-label">
                Details
              </label>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setData({ ...data, details: event.target.value });
                }}
              />
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="venue" className="form-label">
                Venue
              </label>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setData({ ...data, venue: event.target.value });
                }}
              />
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="date" className="form-label">
                Date
              </label>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <input
                type="datetime-local"
                name="date"
                id="date"
                className="form-control"
                onChange={(event) => {
                  setData({ ...data, date: event.target.value });
                }}
              />
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="poster" className="form-label">
                Poster
              </label>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <input
                type="file"
                name="poster"
                id="poster"
                className="form-control"
                onChange={convertToBase64}
              />
              {data.poster === "" || data.poster == null ? (
                <div
                  style={{
                    width: 100,
                    height: 100,
                    border: "1px solid gray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>No image selected</p>
                </div>
              ) : (
                <img
                  width={100}
                  height={100}
                  src={data.poster}
                  alt="poster-image"
                />
              )}
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="registrationlink" className="form-label">
                Registration Link
              </label>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setData({ ...data, registrationlink: event.target.value });
                }}
              />
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <center>
                <button
                  className="btn btn-success"
                  onClick={() => handleSubmitForm()}
                >
                  Add Event
                </button>
              </center>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"></div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
