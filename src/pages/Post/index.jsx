import React, { useEffect, useState } from 'react';

export default function Post(props) {
  const post_id = props.match.params.post;
  const [post, setPost] = useState([]);
  const url = process.env.NODE_ENV === "production"
    ? process.env.BACKEND_URL
    : 'http://localhost:3333'

  const imagePath = post.path
    ? post.path.substring(7)
    : null;

  useEffect(() => {
    async function setData() {
      try {
        const response = await fetch(`${url}/api/posts/${post_id}`);
        const data = await response.json();

        setPost(data);
      } catch (error) {
        console.log(error);
      }
    }
    setData();
  }, [url, post_id]);

  return (
    <div>
      <img src={`${url}/${imagePath}`} alt="Post" />
      <h1>{post.post_title}</h1>
      <p>{post.post_content}</p>
    </div>
  )
}
