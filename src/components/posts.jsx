import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './posts.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const url = process.env.NODE_ENV === "production"
    ? process.env.BACKEND_URL
    : 'http://localhost:3333'

  useEffect(() => {
    async function setData() {
      const response = await fetch(`${url}/api/posts`);
      const data = await response.json();

      setPosts(data);
    }
    setData();
  }, [url])

  return (
    <>
      <div className="section-title">
        <h2>Esta semana</h2>
      </div>
      <div className="Posts">
        {posts.map((post, index) => {
          const path = post.path.substring(7);

          return (
            <Link to={`/posts/${post.post_id}`} key={index}>
              <div
                className="Post"
                style={{ backgroundImage: `url('${url}/${path}')` }}
              >
                <p>{post.post_title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
