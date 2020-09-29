import React from 'react';
import Search from '../assets/search.svg';

import './navbar.css';

export default function NavBar(){
  return (
    <div className="navbar">
      <img  src={Search} alt="Test" />
    </div>
  )
}
