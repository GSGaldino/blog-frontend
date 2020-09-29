import React, { useState, useEffect } from 'react';

import './posts.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function setData() {
      const response = await fetch('https://backend-bl.herokuapp.com/api/posts');
      const data = await response.json();

      setPosts(data);
      console.log(data);
    }
    setData();
  }, [])

  return (
    <>
      <div className="section-title">
        <h2>Esta semana</h2>
      </div>
      <div className="Posts">
        {posts.map(post => (
          <div className="post">
            <div className="post-thumbnail" key={post.post_id}>
              <p>{post.post_title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
