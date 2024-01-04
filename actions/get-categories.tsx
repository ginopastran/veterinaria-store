import { Category } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

interface Query {
  storeId?: string;
}

const getCategories = async (query: Query): Promise<Category[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      storeId: query.storeId,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getCategories;
