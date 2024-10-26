import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import AdminSignIn from './components/AdminSignIn';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/Navbar';
import UserFeedback from './components/Feedback';
import ViewfeedBack from './components/ViewfeedBack';
import EventSuccess from './components/EventSuccess';
import { FidgetSpinner } from 'react-loader-spinner';
import Details from './components/Details';
import AdminPage from './components/AdminPage';
import AdminView from './components/AdminView';
import RegisterForm from './components/RegisterForm';
import ListofParticipants from './components/ListofParticipants';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<FrontPage/>}/>
      <Route path='/admn' element={<AdminSignIn/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/feedback' element={<UserFeedback/>}/>
      <Route path='/viewfeedback' element={<ViewfeedBack/>}/>
      <Route path='/sucess' element={<EventSuccess/>}/>
      <Route path='/spin' element={<FidgetSpinner/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/adminPage' element={<AdminPage/>}/>
      <Route path='/view-events' element={<AdminView/>}/>
      <Route path='/registerform' element={<RegisterForm/>}/>
      <Route path='/participants' element={<ListofParticipants/>}/>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
