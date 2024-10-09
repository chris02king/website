// src/ImageList.js
import React, { useState, useEffect } from 'react';
import myBucket from './s3Config';  // Import S3 config

function ImageList() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const params = {
      Bucket: 'cpk-website-bucket',
    };

    myBucket.listObjects(params, (err, data) => {
      if (err) console.log(err);
      else {
        const urls = data.Contents.map(item => {
          return `https://cpk-website-bucket.s3.us-east-1.amazonaws.com/${item.Key}`;
        });
        setImageUrls(urls);
      }
    });
  }, []);

  return (
    <div>
      {imageUrls.map(url => (
        <img key={url} src={url} alt="Uploaded" style={{ width: '200px', margin: '10px' }} />
      ))}
    </div>
  );
}

export default ImageList;