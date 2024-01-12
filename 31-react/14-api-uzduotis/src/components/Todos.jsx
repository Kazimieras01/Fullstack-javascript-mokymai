import { useState, useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.completed ? 'Atlikta' : 'Neatlikta'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
