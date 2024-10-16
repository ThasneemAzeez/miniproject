import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import AdminSignIn from './components/AdminSignIn';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<AdminSignIn/>}/>
      <Route path='/Form' element={<Form/>}/>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
