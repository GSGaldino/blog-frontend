import React from 'react';

import NavBar from '../../components/navbar';
import Posts from '../../components/posts';
import Populares from '../../components/populares';

import './index.css';

export default function Home(){
  return (
    <div className="Home">
      <div className="title">
        <NavBar />
        <h1>Gabriel Soares</h1>
        <p>Fullstack Javascript Developer</p>
        <Posts />
      </div>

      <Populares />
    </div>
  )
}
