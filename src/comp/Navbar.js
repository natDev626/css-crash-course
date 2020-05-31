import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <ul className="nav-left">
        <li><a href="/">My Brand</a></li>
        <li><a href="/">Portolio</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">About</a></li>
      </ul>

      <ul className="nav-right">
        <li><a href="/">Profile</a></li>
        <li><a href="/">Bookmark</a></li>
        <li><a href="/">Notification</a></li>
        <li><a href="/">Login</a></li>
        <li><a href="/">Logout</a></li>        
      </ul>
    </div>
  );
};

export default Navbar;