import React, {useState, useEffect} from 'react';

import './populares.css'

export default function Populares(){
  const [post, setPost] = useState([]);
  const url = process.env.NODE_ENV === "production"
    ? process.env.BACKEND_URL
    : 'http://localhost:3333'

  useEffect(() => {
    async function getData(){
      const response = await fetch(`${url}/api/posts`);
      const data = await response.json();

      setPost(data[1]);
    }

    getData()
  }, [url])


  return (
    <div className="populares">
      <h2>Populares</h2>
      <div 
        className="post"
        style={{backgroundImage: `url(${url}/${post.path ? post.path.substring(7) : null})`}}
      >
        <p>{post.post_title}</p>
      </div>
    </div>
  )
}
