// https://github.com/aslamdoctor/nuxt-with-express/blob/master/api/models/User.js
// https://typeofnan.dev/your-first-node-express-app-with-typescript/
// https://blog.like.co/nuxt-js-express-api-in-typescript-on-firebase-cloud-functions-ae43cf717992

import express, { 
  Request, 
  Response,
  NextFunction
} from 'express';

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// import api routes 
//import helloRoutes from './routes/hello';

const app = express();

// body parsing options
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('api endpoints')
});

// use api routes
//app.use('/hello', helloRoutes);
app.use('/hello', (req: Request, res: Response) => {
  res.send('world');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  // do stuff here
  // like set user session or osme shit
  next();
})

// throw  300, 400 herrors here

/**
 * app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 */

/*
app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
  res.status(500).json({message: err.message});
});
*/

export default { 
  path: '/api', 
  handler: app
};