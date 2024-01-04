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
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const scrollPosition = window.scrollY;

                const productsData = await getProducts({
                    storeId,
                    categoryId: searchParams.categoryId,
                    subcategoryId: searchParams.subcategoryId,
                });
                setProducts(productsData);
                window.scrollTo(0, scrollPosition);

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
    }, [storeId, searchParams]);

    return { products, categories, subcategories, isLoading };
};

export default useProductsData;