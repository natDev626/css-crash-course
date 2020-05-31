import React from 'react';

import Navbar from 'comp/Navbar';

import './App.css'
import 'assets/fontawesome513/css/all.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        My React app        
      </div>
    </div>
  );
};

export default App;