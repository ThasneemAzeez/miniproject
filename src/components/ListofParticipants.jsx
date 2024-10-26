import axios from 'axios'
import React, { useState } from 'react'


const Search = () => {
    const [data, setData] = useState({
        "eventname": "",
    })


    const [result, setResult] = useState([])
    


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })

    }
    const readValue = async () => {
      console.log(data);
  
      try {
        const response = await fetch("http://localhost:3030/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error(`Network response was not ok:   
   ${response.status}`);
        }
  
        const responseData = await response.json();
        setResult(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    




    return (
        <div>
           
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Event Name</label>
                                <input type="text" className="form-control" name='eventname' value={data.eventname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Event Name</th>
                                            <th scope="col">College</th>
                                            <th scope="col">Department with sem</th>
                                            <th scope="col">Contact Number</th>
                                            <th scope="col">Email</th></tr>
                                    </thead>
                                    <tbody>
                                        {
                                            result.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.name}</th>
                                                        <td>{value.eventname}</td>
                                                        <td>{value.college}</td>
                                                        <td>{value.depatment}</td>
                                                        <td>{value.phnno}</td>
                                                        <td>{value.email}</td>
                                                       
                                                        
                                                    </tr>
                                                }
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search