//import { UserModel } from "../../src/user/user.model";

declare namespace Express {
  interface Request {
    client: any
    //currentUser: UserModel
  }
}