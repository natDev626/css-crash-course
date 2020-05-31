import React from 'react';

import 'assets/css/navbar.css'
import './App.css'
import Navbar from 'comp/Navbar';

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