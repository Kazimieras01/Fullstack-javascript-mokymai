// App.js

// import React from 'react';
import './App.css';
import Tekstas from './components/Tekstas'
import Pirkiniai from './components/Pirkiniai'
import Header from './components/Header'
import Paslaugos from './components/Paslaugos';


function App() {
  return (
    <div className="App">
      <h1>React Projektas</h1>
      <Tekstas />
      <Pirkiniai /> 
      <Header /> 
      <Paslaugos />
    </div>
  );
}

export default App;
