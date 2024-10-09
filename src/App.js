import React from 'react';
import './App.css';  // App styling
import ImageUpload from './ImageUpload';
import ImageList from './ImageList';  // Import the image list

function App() {
  return (
    <div className="App">
      <h1>Image Upload & Download</h1>
      <ImageUpload />
      <ImageList />  {/* Add the image list component */}
    </div>
  );
}

export default App;