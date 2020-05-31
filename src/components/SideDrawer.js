import React from 'react';

import 'assets/css/sidedrawer.css';

const SideDrawer = props => {
  const handleSideDrawer = () => {
    // console.log('backdrop click');
    props.openSideDrawer(false);
  }

  return (
    <div className={`sidedrawer-wrapper ${props.open? 'open': ''}`}>
      <div className="sidedrawer-navbar">
        <ul>          
          <li><a href="/">Home</a></li>
          <li><a href="/">Profolio</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">About</a></li>
        </ul>        
      </div>      
      <div className="backdrop" onClick={handleSideDrawer}></div>
    </div>
  );
};

export default SideDrawer;