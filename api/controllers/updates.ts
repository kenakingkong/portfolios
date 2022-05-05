import { Response } from 'express';
import { IRequest } from '../../types/request';
import UpdateTypes from '../../models/updateTypes';
import IUpdate from '../../models/update';

const TABLENAME = "DevUpdates";

export const getAllUpdates = (req: IRequest, res: Response) => {
  const params: any = { TableName: TABLENAME };
  req.client.scan(params, (err: Error, data: any) => {
    if (err)
      res.status(404).json({ message: "couldn't grab data" })
    else {
      if (req.query[UpdateTypes.volunteer])
        res.status(201).json(data.Items.filter(
          (item: IUpdate) => item.type === UpdateTypes.volunteer)
        );
      else if (req.query[UpdateTypes.career])
        res.status(201).json(data.Items.filter(
          (item: IUpdate) => item.type === UpdateTypes.career)
        );
      else if (req.query[UpdateTypes.project])
        res.status(201).json(data.Items.filter(
          (item: IUpdate) => item.type === UpdateTypes.project)
        );
      else
        res.status(201).json(data.Items)
    }
  });
};