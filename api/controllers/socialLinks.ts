import { RequestHandler } from 'express';
import SocialLink from '../models/socialLink';
import SiteTypes from '../models/siteTypes';

const TABLENAME = "SocialLinks";

export const getAllSocialLinks: RequestHandler = (req, res) => {
  const params: any = { TableName: TABLENAME };
  req.client.scan(params, (err: Error, data: any) => {
    if (err)
      res.status(404).json({ message: "not found "})
    else {
      if (req.query[SiteTypes.art])
        res.status(201).json(data.Items.filter(
          (item: SocialLink) => item.type === SiteTypes.art)
        );
      if (req.query[SiteTypes.dev])
        res.status(201).json(data.Items.filter(
          (item: SocialLink) => item.type === SiteTypes.dev)
        );
      res.status(201).json(data.Items)
    }
  });
};

export const createSocialLink: RequestHandler = (req, res) => {
  const id = Math.random().toString();
  const name = (req.body as { name: string }).name;
  const url = (req.body as { url: string }).url;
  const icon = (req.body as { icon: string }).icon;
  const type = (req.body as { type: SiteTypes }).type;

  const newSocialLink: SocialLink = { 
    id, name, url, icon, type 
  };

  const params = {
    TableName: TABLENAME,
    Item: newSocialLink,
  };

  req.client.put(params, (err: Error, data: Object) => {
    if (err) {
      console.log("Unable to add item");
      console.error("Error JSON:", JSON.stringify(err, null, 2));
      res.status(400).json({ message: "Unable to add item."})
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2));
      res.status(201).json(newSocialLink);
    }
  })
};

export const updateSocialLink: RequestHandler = (req, res) => {
  res.status(200)
};

export const deleteSocialLink: RequestHandler = (req, res) => {
  res.status(200)
}