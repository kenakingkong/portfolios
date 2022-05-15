// https://github.com/aslamdoctor/nuxt-with-express/blob/master/api/models/User.js
// https://typeofnan.dev/your-first-node-express-app-with-typescript/
// https://blog.like.co/nuxt-js-express-api-in-typescript-on-firebase-cloud-functions-ae43cf717992

import express, { Request, Response, NextFunction } from "express";

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// import api routes
import helloRoutes from "./routes/hello";
import spotifyRoutes from "./routes/spotify";


//import custom types
import { IRequest } from "../types/request";

const app = express();

// body parsing options
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cookieParser());

// add aws db client
app.use((req: IRequest, res, next) => {
  req.client = client;
  next();
});

app.use((req: IRequest, res: Response, next: NextFunction) => {
  // do stuff here
  // like set user session or osme shit
  next();
});

// use api routes
app.use("/hello", helloRoutes);
app.use("/spotify", spotifyRoutes);

// throw  300, 400 herrors here

// anchor handler for general 404 cases
app.use((req: IRequest, res: Response, next: NextFunction) => {
  console.log(req);
  res.status(404).json({ message: "not found" });
});

// anchor handler for all cases
app.use((err: Error, req: IRequest, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default {
  path: "/api",
  handler: app,
};
