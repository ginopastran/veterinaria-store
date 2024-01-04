import { Subcategory } from "@/types";
import qs from "query-string";
import * as _ from "lodash";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/subcategories`;

interface Query {
  storeId?: string;
  categoryId?: string;
}

const getSubCategories = async (
  query: Query
): Promise<{ [key: string]: Subcategory[] }> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      storeId: query.storeId,
    },
  });

  const res = await fetch(url, { cache: "no-store" });

  const subcategories = await res.json();

  const groupedSubcategories = _.groupBy(
    subcategories,
    (subcategory: Subcategory) => subcategory.categoryId
  );

  return groupedSubcategories;
};

export default getSubCategories;
