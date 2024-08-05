import { AxiosRequestConfig } from 'axios';

export interface AvgPrice {
  keyword: string;
  currency: string;
  avgPrice: number;
  error?: string;
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

type PricesArr = {
  keyword: string;
  prices: number[];
};

type PricesErr = {
  keyword: string;
  prices: { message: string; status: number };
};

export type ZyteRes = PricesArr & PricesErr;
