import React, { createContext, useState } from 'react';
import Home from './pages/home';
import './App.css';

export const GlobalContext = createContext({});

function App() {
  const [allTask, setAllTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ allTask, setAllTask, isEditing, setIsEditing }}
    >
      <Home />
    </GlobalContext.Provider>
  );
}

export default App;
