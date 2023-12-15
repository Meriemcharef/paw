import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Myday from './pages/Myday';
import Completed from './pages/Completed';
import Important from './pages/Important';
import Task from './pages/Task';
import All from './pages/All';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import { ThemeProvider } from './theme/ThemeContext.js';
import SignUp from './pages/SignUp';
import { SignupProvider } from './contexts/SignupContext'; 



import './index.css'; 

function App() {
  return (
    <ThemeProvider>
        
      <Router>
        <div className="App">
          <Navbar />
          <div className="content-wrapper">
            <div id='side'>
              <Sidebar />
            </div>
            <div id='to' className="center-content">
              <Routes>
                <Route path="/myday" element={<Myday/>} />
                <Route path="/task" element={<Task />} />
                <Route path="/all" element={<All />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/important" element={<Important />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;