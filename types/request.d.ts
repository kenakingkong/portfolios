import { DynamoDB } from "aws-sdk"
import { Request } from "express"

export interface IRequest extends Request {
  client?: DynamoDB.DocumentClient
}