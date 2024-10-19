import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import AdminSignIn from './components/AdminSignIn';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/Navbar';
import UserFeedback from './components/Feedback';
import ViewfeedBack from './components/ViewfeedBack';

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
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
