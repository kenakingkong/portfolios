import UpdateTypes from "./updateTypes";

export interface IUpdate {
  id: string,
  title: string,
  subtitle: string,
  url: string,
  icon: string,
  date: string,
  type: UpdateTypes,
}

export default IUpdate;