import { DynamoDB } from "aws-sdk";

const REGION = 'us-east-2';

const client = new DynamoDB.DocumentClient({ region: REGION });

export default client;