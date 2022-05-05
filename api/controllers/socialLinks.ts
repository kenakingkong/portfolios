import { Response } from 'express';
import { IRequest } from '../../types/request';
import ISocialLink from '../../models/socialLink';
import SiteTypes from '../../models/siteTypes';

const TABLENAME = "SocialLinks";

export const getAllSocialLinks = (req: IRequest, res: Response) => {
  const params: any = { TableName: TABLENAME };
  req.client.scan(params, (err: Error, data: any) => {
    if (err)
      res.status(404).json({ message: "couldn't grab data" })
    else {
      if (req.query[SiteTypes.art])
        res.status(201).json(data.Items.filter(
          (item: ISocialLink) => item.type === SiteTypes.art)
        );
      else if (req.query[SiteTypes.dev])
        res.status(201).json(data.Items.filter(
          (item: ISocialLink) => item.type === SiteTypes.dev)
        );
      else
        res.status(201).json(data.Items)
    }
  });
};