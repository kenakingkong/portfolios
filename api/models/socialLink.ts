import SiteTypes from './siteTypes';
export interface SocialLink {
  id: string,
  name: string,
  url: string,
  icon: string,
  type: SiteTypes
}

export default SocialLink;