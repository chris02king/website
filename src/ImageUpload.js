import React, { useState } from 'react';
import { Button, Input } from '@mui/material'; // Ensure you're using @mui/material
import myBucket from './s3Config'; // Ensure you import your S3 configuration from s3Config.js

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    setError('');  // Clear any previous error
  };

  const uploadFile = () => {
    if (!selectedFile) {
      setError('No file selected. Please choose a file to upload.');
      return;
    }

    const params = {
      ACL: 'public-read',
      Body: selectedFile,
      Bucket: 'cpk-website-bucket', // Bucket name updated
      Key: selectedFile.name
    };

    myBucket.putObject(params)
      .send((err) => {
        if (err) {
          console.log(err);
          setError('Error uploading file. Please try again.');
        } else {
          console.log("Successfully uploaded");
        }
      });
  };

  return (
    <div>
      <Input type="file" onChange={handleFileInput} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button variant="contained" color="primary" onClick={uploadFile}>
        Upload
      </Button>
    </div>
  );
}

export default ImageUpload;