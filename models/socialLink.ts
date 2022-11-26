import SiteTypes from "./siteTypes";

interface ISocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  type: SiteTypes;
}

export default ISocialLink;
