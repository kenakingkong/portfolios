import { RequestHandler } from 'express';
// import Hello from '../models/hello';

export const getHello: RequestHandler = (req, res, next) => {
  // const text = (req.body as { text: string}).text;
  // const id = Math.random().toString();
  // const newHello = new Hello(id, text);
  res.status(201).json({message: 'world'});
};