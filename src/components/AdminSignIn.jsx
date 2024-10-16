import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValues = async () => {
    try {
      const response = await axios.post("http://localhost:3030/adminSignIn", input);
      console.log(response.data);

      if (response.data.status === "Incorrect Password") {
        alert("Incorrect Password");
        setInput({ email: "", password: "" }); // Clear input fields visually
      } else if (response.data.status === "Invalid email") {
        alert("Incorrect Email or Password");
        setInput({ email: "", password: "" }); // Clear input fields visually
      } else {
        let token = response.data.token;
        let adminId = response.data.adminId;
        console.log(adminId);
        console.log(token);

        sessionStorage.setItem("adminId", adminId);
        sessionStorage.setItem("token", token);
        navigate("/Form"); // Navigate to admin dashboard after login
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or Unable to sign in at this time.'); // User-friendly error message
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
            {/* Image section (optional) */}
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
            <div className="card border-light mb-3">
              <div className="card-body">
                <br /> {/* Remove unnecessary line breaks */}
                <label htmlFor="email" className="form-label">EMAIL</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
                <label htmlFor="password" className="form-label">PASSWORD</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={input.password}
                  onChange={inputHandler}
                />
                <div className="d-grid gap-2">
                  <button onClick={readValues} className="btn btn-primary">SIGN IN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;