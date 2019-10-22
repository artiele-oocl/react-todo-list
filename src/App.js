import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Simple Todo List App using react</span>
        <Todo/>
      </header>
    </div>
  );
}

export default App;
