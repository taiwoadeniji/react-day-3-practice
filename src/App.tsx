import React from 'react';
import Person from './components/Person';
import PersonOnChange from './components/PersonOnChange';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person /> 
      <PersonOnChange />
    </div>
  );
}

export default App;
