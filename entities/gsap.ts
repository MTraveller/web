export interface GSAP {
  keyStrings: string;
}

export const Markets = {
  Argentina: { countryCode: 'AR', currency: 'ARS' },
  Australia: { countryCode: 'AU', currency: 'AUD' },
  Austria: { countryCode: 'AT', currency: '€' },
  Belgium: { countryCode: 'BE', currency: '€' },
  Brazil: { countryCode: 'BR', currency: 'BRB' },
  Canada: { countryCode: 'CA', currency: 'CAD' },
  Chile: { countryCode: 'CL', currency: 'CLP' },
  Colombia: { countryCode: 'CO', currency: 'COP' },
  Czechia: { countryCode: 'CZ', currency: 'CZK' },
  Denmark: { countryCode: 'DK', currency: 'DKK' },
  Finland: { countryCode: 'FI', currency: '€' },
  France: { countryCode: 'FR', currency: '€' },
  Germany: { countryCode: 'DE', currency: '€' },
  Greece: { countryCode: 'GR', currency: '€' },
  'Hong Kong': { countryCode: 'HK', currency: 'HKD' },
  Hungary: { countryCode: 'HU', currency: 'HUF' },
  India: { countryCode: 'IN', currency: 'INR' },
  Indonesia: { countryCode: 'ID', currency: 'IDR' },
  Ireland: { countryCode: 'IE', currency: '€' },
  Italy: { countryCode: 'IT', currency: '€' },
  Japan: { countryCode: 'JP', currency: 'JPY' },
  Malaysia: { countryCode: 'MY', currency: 'MYR' },
  Mexico: { countryCode: 'MX', currency: 'MXP' },
  Netherlands: { countryCode: 'NL', currency: '€' },
  'New Zealand': { countryCode: 'NZ', currency: 'NZD' },
  Norway: { countryCode: 'NO', currency: 'NOK' },
  Philippines: { countryCode: 'PH', currency: 'PHP' },
  Poland: { countryCode: 'PL', currency: 'PLN' },
  Portugal: { countryCode: 'PT', currency: '€' },
  Romania: { countryCode: 'RO', currency: 'RON' },
  Russia: { countryCode: 'RU', currency: 'RUB' },
  'Saudi Arabia': { countryCode: 'SA', currency: 'SAR' },
  Singapore: { countryCode: 'SG', currency: 'SGD' },
  Slovakia: { countryCode: 'SK', currency: '€' },
  'South Africa': { countryCode: 'ZA', currency: 'ZAR' },
  'South Korea': { countryCode: 'KR', currency: 'KRW' },
  Spain: { countryCode: 'ES', currency: '€' },
  Sweden: { countryCode: 'SE', currency: 'SEK' },
  Switzerland: { countryCode: 'CH', currency: 'CHF' },
  Taiwan: { countryCode: 'TW', currency: 'TWD' },
  Thailand: { countryCode: 'TH', currency: 'THB' },
  Turkey: { countryCode: 'TR', currency: 'TRY' },
  Ukraine: { countryCode: 'UA', currency: 'UAH' },
  'United Arab Emirates': { countryCode: 'AE', currency: 'AED' },
  'United Kingdom': { countryCode: 'GB', currency: '£' },
  'United States': { countryCode: 'US', currency: '$' },
  Vietnam: { countryCode: 'VN', currency: 'VND' },
};

export interface FormProps {
  doSubmit: (form: string) => void;
  loading: boolean;
}

export type FormData = {
  keywords: string;
  country: string;
  countryCode: string;
  currency: string;
};

export interface AvgPrices {
  keyword: string;
  currency: string;
  avgPrice: number;
}

export type DataKeywords = {
  country: string;
  countryCode: string;
  currency: string;
  keywords: string[];
};

export interface ProductData {
  data: AvgPrices[];
}
