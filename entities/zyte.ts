import { AxiosRequestConfig } from 'axios';

export interface AvgPrices {
  keyword: string;
  currency: string;
  avgPrice: number;
}

export interface ZyteArgs {
  keyword: string;
  countryCode: string;
}

export interface ZyteConfig extends AxiosRequestConfig {
  url: string;
  httpResponseBody: boolean;
  productList: boolean;
  geolocation: string;
  actions: [
    {
      action: string;
      selector: {
        value: string;
        type: string;
      };
    }
  ];
}

export interface Auth {
  username: string;
  password: '';
}

export interface productList {
  price: string;
}
