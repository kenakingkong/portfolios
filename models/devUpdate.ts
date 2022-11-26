import DevUpdateTypes from "./devUpdateTypes";

interface IDevUpdate {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: string;
  date: string;
  type: DevUpdateTypes;
}

export default IDevUpdate;
