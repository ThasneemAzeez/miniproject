import axios from 'axios';
import React, { useState } from 'react';

const RegisterForm = () => {
    const [data, setData] = useState({
        "name": "",
        "eventname": "",
        "college": "",
        "department": "",
        "phnno": "",
        "email": ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log("Data to send:", data);

        axios.post("http://localhost:3030/register", data)
            .then((response) => {
                console.log("Response from backend:", response.data);

                if (response.data.status === "success") {
                    alert("Registered successfully");
                } else {
                    alert("Registration failed");
                }
            })
            .catch((error) => {
                console.error("Error in Axios request:", error.response ? error.response.data : error.message);
                alert("Request failed due to a server error.");
            });
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg p-4">
                        <h3 className="card-title text-center mb-4">Event Registration</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="eventname" className="form-label">Event Name</label>
                                <input type="text" className="form-control" name="eventname" value={data.eventname} onChange={inputHandler} placeholder="Enter event name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="college" className="form-label">College</label>
                                <input type="text" className="form-control" name="college" value={data.college} onChange={inputHandler} placeholder="Enter college name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="department" className="form-label">Department</label>
                                <input type="text" className="form-control" name="department" value={data.department} onChange={inputHandler} placeholder="Enter department" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phnno" className="form-label">Contact Number</label>
                                <input type="tel" className="form-control" name="phnno" value={data.phnno} onChange={inputHandler} placeholder="Enter contact number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={data.email} onChange={inputHandler} placeholder="Enter email" />
                            </div>
                            <div className="d-grid">
                                <button type="button" className="btn btn-primary btn-block" onClick={readValue}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
