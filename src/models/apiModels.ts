export interface UserLogin {
  userId: string;
  password: string;
}

export interface Product {
  alias: string;
  number: string;
  availableAmount: number;
  productType: string;
}
export interface CreditCard {
  alias: string;
  number: string;
  availableAmountRD: number;
  availableAmountUS: number;
  isInternational: boolean;
  productType: string;
}

export interface User {
  name: string;
  lastName: string;
  photo: string;
}
export interface Token {
  access_token:  string;
  refresh_token: string;
}
