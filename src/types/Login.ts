export interface LoginResponse {
  tokens: {
    access: string;
    refresh: string;
  };
  user: {
    phoneNumber: string;
    id: string;
    restaurantColors: string[];
    restaurantId: string;
    restaurantImage: string;
    restaurantName: string;
    role: string;
    username: string;
  };
}
