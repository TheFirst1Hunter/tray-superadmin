import { User } from "./User";

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

  Users: User[];
}

export interface RegisterRestaurant {
  username: string;
  phoneNumber: string;
  password: string;
  restaurantName: string;
  restaurantDescription: string;
  restaurantDescriptionAr: string;
  restaurantAddress: string;
  restaurantAddressAr: string;
  restaurantAddressLink: string;
  restaurantColor: string;
  restaurantImage: string;
  groupName: string;
}

export interface UpdateRestaurant {
  id: string;
  restaurantName: string;
  restaurantDescription: string;
  restaurantDescriptionAr: string;
  restaurantAddress: string;
  restaurantAddressAr: string;
  restaurantAddressLink: string;
  restaurantColor: string;
  restaurantImage: string;
  groupName: string;
}
