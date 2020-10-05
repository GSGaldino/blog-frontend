import React from 'react';

import NavBar from '../../components/navbar';
import Title from '../../components/title';
import Posts from '../../components/posts';
import Populares from '../../components/populares';

import './index.css';

export default function Home(){
  return (
    <div className="Home">
      <div className="title">
        <NavBar />
        <Title />
        <Posts />
      </div>

      <Populares />
    </div>
  )
}
