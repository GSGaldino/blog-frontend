import React, {useState, useEffect} from 'react';

import './populares.css'

export default function Populares(){
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getData(){
      const response = await fetch('https://backend-bl.herokuapp.com/api/posts');
      const data = await response.json();

      setPost(data[4]);
    }

    getData();
  }, [])
  return (
    <div className="populares" >
      <h2>Populares</h2>
      <div className="post">
        <p>{post.post_title}</p>
      </div>
    </div>
  )
}
