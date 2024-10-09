import React, { useState, useEffect } from 'react';
import myBucket from './s3Config';  // Import S3 configuration

function ImageList() {
  const [imageUrls, setImageUrls] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = () => {
      const params = {
        Bucket: 'cpk-website-bucket',  // Your bucket name
      };

      myBucket.listObjectsV2(params, (err, data) => {
        if (err) {
          console.log(err);
          setError('Error fetching images from S3. Please try again.');
        } else {
          const urls = data.Contents.map(item => {
            return {
              key: item.Key,
              url: `https://${params.Bucket}.s3.${myBucket.config.region}.amazonaws.com/${item.Key}`
            };
          });
          setImageUrls(urls);
        }
      });
    };

    fetchImages();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Available Images for Download</h2>
      {imageUrls.length === 0 && <p>No images available for download.</p>}
      <ul>
        {imageUrls.map((image) => (
          <li key={image.key}>
            <a href={image.url} download={image.key} target="_blank" rel="noopener noreferrer">
              {image.key}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageList;