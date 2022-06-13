export interface Restaurant {
  id: string;
  name: string;
  active: boolean;
  image: string;
  description: {
    ar: string;
    en: string;
  };
  address: {
    ar: string;
    en: string;
  };
  addressLink: string;
  colors: string[];
  groupName: string;
}
