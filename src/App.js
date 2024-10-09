// src/App.js
import React from 'react';
import './App.css';  // Importing CSS for styling
import ImageUpload from './ImageUpload';
import ImageList from './ImageList';

function App() {
  return (
    <div className="App">
      <h1>Image Upload & Download</h1>
      <ImageUpload />
      <ImageList />
    </div>
  );
}

export default App;