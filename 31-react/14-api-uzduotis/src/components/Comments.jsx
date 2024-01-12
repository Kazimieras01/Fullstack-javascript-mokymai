import { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.body}</p>
            <p>{post.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
