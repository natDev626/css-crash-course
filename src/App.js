import React, { useState } from 'react';

import './App.css'
import 'assets/fontawesome513/css/all.min.css';

import Headline from 'components/Headline';
import Responsive from 'components/Responsive';
import SideDrawer from 'components/SideDrawer';
import Notice from 'components/Notice';
import Position from 'components/Position';
import Navbar from 'components/Navbar';


const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  console.log('side drawer', sideDrawerOpen);

  return (
    <div>
      <Navbar openSideDrawer={setSideDrawerOpen} />
      <SideDrawer open={sideDrawerOpen} openSideDrawer={setSideDrawerOpen} />    
      <div className="content-wrapper">
        <Headline />
        <Position />        
        <Notice />        
        <Responsive />        
      </div>
    </div>
  );
};

export default App;