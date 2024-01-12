import { useState } from 'react';
import axios from 'axios';

const AddPostForm = ({ updatePostsList }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const addPost = () => {
    const newPost = {
      title: title,
      body: body,
    };

    axios
      .post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then((response) => {
        console.log('Naujas pranešimas sukurtas:', response.data);
        // Jei turite funkciją atnaujinti pranešimų sąrašą, šiame taške ją iškviesti
        updatePostsList(); // Panaudokite jūsų funkciją atnaujinti pranešimų sąrašą
      })
      .catch((error) => {
        console.error('Klaida kuriant pranešimą:', error);
      });
  };

  return (
    <div>
      <h2>Pridėti naują pranešimą</h2>
      <form onSubmit={addPost}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={handleBodyChange}></textarea>
        </div>
        <button type="submit">Pridėti pranešimą</button>
      </form>
    </div>
  );
};

export default AddPostForm;