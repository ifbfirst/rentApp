export interface PropertyRates {
  nightly?: number;
  weekly?: number;
  monthly?: number;
}

export interface PropertyLocation {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface PropertySellerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface Property {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: PropertyLocation;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: PropertyRates;
  seller_info: PropertySellerInfo;
  images: string[];
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}


