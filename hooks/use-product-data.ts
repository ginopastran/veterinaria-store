import { useState, useEffect } from 'react';
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";
import getSubCategories from "@/actions/get-subcategories";
import { Category, Product, Subcategory } from '@/types';

type SearchParams = {
    categoryId?: string;
    subcategoryId?: string;
};

const useProductsData = (storeId: string, searchParams: SearchParams) => {
    const { categoryId, subcategoryId } = searchParams;
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const productsData = await getProducts({
                    storeId,
                    categoryId,
                    subcategoryId,
                });
                setProducts(productsData);
                const categoriesData = await getCategories({ storeId });
                setCategories(categoriesData);

                const getSubCategoriesFlat = async (storeId: string) => {
                    const subcategoriesObject = await getSubCategories({ storeId });
                    const subcategoriesArray = Object.values(subcategoriesObject).flat();
                    return subcategoriesArray;
                };

                const subcategoriesData = await getSubCategoriesFlat(storeId);
                setSubcategories(subcategoriesData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [storeId, categoryId, subcategoryId]); // Use categoryId and subcategoryId as dependencies

    return { products, categories, subcategories, isLoading };
};

export default useProductsData;