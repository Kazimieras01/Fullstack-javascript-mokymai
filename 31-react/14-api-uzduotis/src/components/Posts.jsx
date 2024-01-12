import { useState, useEffect } from 'react';
import axios from 'axios';
import AddPostForm from './AddPostForm';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Pranešimai</h2>
      <AddPostForm/>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Vartotojo ID: {post.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;