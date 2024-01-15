import { useState, useEffect } from 'react';
import Axios from 'axios';

const Komp3 = () => {
  const [documents, setDocuments] = useState([]);
  const [currentDocumentIndex, setCurrentDocumentIndex] = useState(0);

  useEffect(() => {
    Axios.get('http://localhost:3001/getNotes')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleNext = () => {
    setCurrentDocumentIndex((prevIndex) => (prevIndex + 1) % documents.length);
  };

  const handlePrevious = () => {
    setCurrentDocumentIndex((prevIndex) =>
      prevIndex === 0 ? documents.length - 1 : prevIndex - 1
    );
  };

  const currentDocument = documents[currentDocumentIndex];

  return (
    <div>
      <h2>Rodyti irasa</h2>

      {documents.length > 0 ? (
        <div style={{ border: '1px solid black', padding: '10px' }}>
          <h3>{currentDocument.title}</h3>
          <p>{currentDocument.description}</p>
          <button onClick={handlePrevious}>Ankstesnis</button>
          <button onClick={handleNext}>Sekantis</button>
        </div>
      ) : (
        <p>No documents available.</p>
      )}
    </div>
  );
};

export default Komp3;