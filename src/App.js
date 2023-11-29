// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Myday from './pages/Myday';
import Completed from './pages/Completed';
import Important from './pages/Important';
import Task from './pages/Task';
import All from './pages/All';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content-wrapper">
          <div id='side'>
            <Sidebar />
          </div>
          <div id='to' className="center-content">
            <Routes>
              <Route path="/myday" element={<Myday />} />
              <Route path="/task" element={<Task />} />
              <Route path="/all" element={<All />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/important" element={<Important />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
