import AWS from 'aws-sdk';

// S3 Configuration
const S3_BUCKET = 'cpk-website-bucket';
const REGION = 'us-east-1';

AWS.config.update({ region: REGION });

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

export default myBucket;