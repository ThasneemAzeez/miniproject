import React from 'react'

const RegisterSuccess = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center p-4">
        <h2 className="mb-4 text-success">Registration Success</h2>
        <div className="card shadow-lg" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <img 
            src="https://cdn.prod.website-files.com/65d605a3b4417479c154329f/65eb3016f128e49ac7076dd2_PA-Success.png" 
            height="400px" 
            className="card-img-top rounded-top" 
            alt="Event success illustration" 
          />
          <div className="card-body">
            <h5 className="card-title text-primary">Registered Successfully</h5>
            <p className="card-text text-muted">Your registration has been successfully added</p>
            <a href="/" className="btn btn-primary btn-lg mt-3">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterSuccess