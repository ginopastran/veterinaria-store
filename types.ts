export interface Product {
  id: string;
  category: Category;
  subcategory: Subcategory;
  storeId: string;
  name: string;
  nameTag: string;
  description: string;
  price: string;
  offerPrice: string;
  isFeatured: boolean;
  // size: Size;
  // color: Color;
  images: PImage[]
};

export interface PImage {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Subcategory {
  id: string;
  name: string;
  category: Category;
  categoryId: string;
};

// export interface Size {
//   id: string;
//   name: string;
//   value: string;
// };

// export interface Color {
//   id: string;
//   name: string;
//   value: string;
// };
