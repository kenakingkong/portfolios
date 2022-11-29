import IDesignFile from "./designFile";

interface IDesignFileset {
  id: string;
  title: string;
  zip: IDesignFile;
  files: IDesignFile[];
}

export default IDesignFileset;
