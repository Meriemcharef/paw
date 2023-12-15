import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Myday from './pages/Myday';
import Completed from './pages/Completed';
import Important from './pages/Important';
import Religion from './pages/Religion.js';
import Myweek from './pages/Myweek.js';
import Mesachats from './pages/Mesachats.js';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Login from './pages/Login';
import { ThemeProvider } from './theme/ThemeContext.js';
import SignUp from './pages/SignUp';
import { SignupProvider } from './contexts/SignupContext'; 
import Counter from './pages/Counter.js';



import './index.css'; 

function App() {
  return (
    <ThemeProvider>
        
      <Router>
        <div className="App p-10 m-10">
          <Navbar />
          <div className="content-wrapper">
            <div id='side'>
              <Sidebar />
            </div>
            <div id='to'>
              <Routes>
                <Route path="/myday" element={<Myday/>} />
                <Route path="/myweek" element={<Myweek />} />
                <Route path="/mesAchats" element={<Mesachats />} />
                {/* <Route path="/completed" element={<Completed />} /> */}
                <Route path="/important" element={<Important />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/religion" element={<Religion />} />

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