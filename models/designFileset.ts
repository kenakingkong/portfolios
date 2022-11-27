import IDesignFile from "./designFile";

interface IDesignFileset {
  id: string;
  name: string;
  zip: IDesignFile;
  files: IDesignFile[]
}

export default IDesignFileset;
