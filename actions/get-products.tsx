import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  subcategoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  storeId?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      storeId: query.storeId,
      categoryId: query.categoryId,
      subcategoryId: query.subcategoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};
export default getProducts;
