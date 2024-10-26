import { useNavigate } from 'react-router-dom';
import "./AdminPage.css";

const AdminPage = () => {
    const navigate = useNavigate();

    const handleCreateEvent = () => {
        navigate('/form');
    };

    const handleViewEvents = () => {
        navigate('/view-events');
    };



    return (
        <div className="container">
        <div className="row">
        <div className="col-md-6">
            <img src="https://sales.webtel.in/images/Login-page-character1.png" alt="Image" className="img-fluid" />
          </div>
          

          <div className="col-md-6"><br /><br /><br />
          
            <div className="card text-center" >
              <div className="card-overlay">
                <h1><center>Welcome </center></h1><br /><br />
                <button onClick={handleCreateEvent} className="btn btn-primary btn-block">
                  Create New Event
                </button><br /><br />
                <button onClick={handleViewEvents} className="btn btn-secondary btn-block">
                  View Your Events
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
}
export default AdminPage