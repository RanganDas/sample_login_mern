
import './App.css';
import Signup from './components/signup'
import Login from './components/login'
import Home from './components/home'
import ForgotPassword from './components/forgotpassword'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home />}></Route>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/forgot-password' element={<ForgotPassword />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
