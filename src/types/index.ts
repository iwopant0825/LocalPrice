export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  imageUrl?: string;
  store: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  phone?: string;
  website?: string;
}

export interface PriceComparison {
  productName: string;
  stores: Array<{
    store: Store;
    price: number;
    lastUpdated: Date;
  }>;
}

export interface User {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
  preferences?: {
    favoriteStores: string[];
    favoriteCategories: string[];
  };
}
