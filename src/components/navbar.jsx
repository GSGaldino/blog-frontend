import React from 'react';
import {ReactComponent as Search} from '../assets/search.svg';

import './navbar.css';

export default function NavBar(){
  return (
    <div className="navbar">
      <Search />
    </div>
  )
}
