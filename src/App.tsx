import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'; 
import HappyDay from './HappyDay'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/happy-day" element={<HappyDay name={'Lucky Bhardwaj'}/>} />
          

        </Routes>
      </div>
    </Router>
  );
};

export default App;
