import aws from 'aws-sdk';
const dotenv = require('dotenv').config();

// create a new DynamoDB client
aws.config.update({ 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2' 
});

const client = new aws.DynamoDB.DocumentClient();

export default client;