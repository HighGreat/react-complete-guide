import React from 'react';
import './App.css';
import Person from './Person/person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is realy working!</p>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29" />
      <Person name="Stephanie" age="26" />
    </div>
  );
}

export default App;
