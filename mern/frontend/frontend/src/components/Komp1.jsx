import { useState, useEffect } from 'react';
import Axios from "axios";

const Komp1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getNotes')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleDeleteDocument = async (documentId) => {
    try {
      await Axios.delete(`http://localhost:3001/deleteNote/${documentId}`);
      // Refresh the document list after deletion
      setData(data.filter(item => item._id !== documentId));
      alert('Document deleted successfully!');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div>
      <h2>Visi irasai</h2>
      {data.map((item, i) => (
        <div key={i} style={{ border: '1px solid black', marginBottom: '10px' }}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {/* Add a delete button for each document */}
          <button onClick={() => handleDeleteDocument(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Komp1;