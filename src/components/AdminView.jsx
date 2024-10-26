import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminView = () => {
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

    const deleteCourse = async (id) => {
        let input = { "_id": id };
        try {
            const response = await axios.post("http://localhost:3030/delete", input);
            if (response.data.status === "success") {
                alert("Deleted successfully");
                setData(data.filter(item => item._id !== id)); // Update UI after deletion
            } else {
                alert("Error deleting the event.");
            }
        } catch (error) {
            console.error("Error deleting the event", error);
            alert("Error deleting the event.");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const navigate = useNavigate();

    const viewParticipants = () => {
        navigate('/participants');
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Admin Dashboard</h2>

            {loading && <p>Loading data...</p>}
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover shadow-sm">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Event Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => deleteCourse(value._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {data.length === 0 && !loading && (
                        <p className="text-center mt-4">No events available.</p>
                    )}
                </div>
            </div>

            <div className="text-center mt-4">
                <button
                    onClick={viewParticipants}
                    className="btn btn-primary btn-lg"
                >
                    View Participants
                </button>
            </div>
        </div>
    );
};

export default AdminView;
