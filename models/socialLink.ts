import SiteTypes from './siteTypes';

export interface ISocialLink {
  id: string,
  name: string,
  url: string,
  icon: string,
  type: SiteTypes
}

export default ISocialLink;