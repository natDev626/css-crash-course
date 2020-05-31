import React, { useState } from 'react';

import 'assets/css/navbar.css';
import Badge from './Badge';
import logoImg from 'assets/img/logo-192.svg';
import userImg from 'assets/img/bill-gate.jpg';


const Navbar = () => {
  const [noticeNav] = useState([
    { link:'/', label:'Hello'},
    { link:'/', label:'Web Development'},
    { link:'/', label:'Machine Learning'},
    { link:'-', label:'-'},
    { link:'/', label:'Exit'},
  ])

  const [bookmarkNav] = useState([
    { link:'/', label:'Bookmark 1'},
    { link:'/', label:'Bookmark 2'},
    { link:'/', label:'Bookmark 3'},
    { link:'-', label:'-'},
    { link:'/', label:'Exit'},
  ])

  const [noticeIcon] = useState(
    { link:'/', label:'notice'}
  )

  const [bookmarkIcon] = useState(
    { link:'/', label:'bookmark'}
  )

  return (
    <div className="navbar-wrapper">
      <ul className="nav-left">
        <li className="nav-brand"><a href="/"><img src={logoImg} alt="logo" /></a></li>
        <li><a href="/">Portolio</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">About</a></li>
      </ul>

      <ul className="nav-right">
        <li className="user-nav"><a href="/"><img src={userImg} alt="user-img" />Korn Chayapon</a></li>
        {/* <li><a href="/">Bookmark</a></li>            */}
        <Badge
          icon={bookmarkIcon}
          navList={bookmarkNav} />
        <Badge
          icon={noticeIcon}
          navList={noticeNav} />
        <li><a href="/">Login</a></li>
        <li><a href="/">Logout</a></li>        
      </ul>
    </div>
  );
};

export default Navbar;