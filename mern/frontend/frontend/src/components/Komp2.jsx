import { useState } from 'react';
import axios from 'axios';

const Komp2 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = async () => {
    try {
      if (!title || !description) {
        alert('Title and description are required fields.');
        return;
      }

      const newNote = { title, description };
      await axios.post('http://localhost:3001/createNote', newNote);
      setTitle('');
      setDescription('');

      // Show alert if note is added successfully
      alert('Note added successfully!');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div>
      <h2>Iveskite duomenis</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleAddNote}>Prideti irasa</button>
    </div>
  );
};

export default Komp2;