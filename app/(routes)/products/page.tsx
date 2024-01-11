"use client";

import React, { useEffect, useState } from "react";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import ProductsHero from "@/components/ui/products-hero";
import getCategories from "@/actions/get-categories";
import getSubCategories from "@/actions/get-subcategories";
import { Category, Product, Subcategory } from "@/types";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ClipLoader } from "react-spinners";
import useProductsData from "@/hooks/use-product-data";
import MobileCart from "@/components/mobile-cart";

interface ProductsPageProps {
  searchParams: {
    categoryId: string;
    subcategoryId: string;
  };
}

const ProductsPage: React.FC<ProductsPageProps> = ({ searchParams }) => {
  const storeId = `${process.env.STORE_ID}`;

  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [productsToShow, setProductsToShow] = useState(8);
  const [mobileProductsToShow, setMobileProductsToShow] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedMobileSubcategory, setSelectedMobileSubcategory] = useState<
    string | null
  >(null);

  const productsPerPage = 8;
  const mobileProductsPerPage = 6;

  const { products, categories, subcategories, isLoading } = useProductsData(
    storeId,
    searchParams
  );

  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedSubcategory = localStorage.getItem("selectedSubcategory");

    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }

    if (storedSubcategory) {
      setSelectedSubcategory(storedSubcategory);
    }
  }, [searchParams]);

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory || "");
    localStorage.setItem("selectedSubcategory", selectedSubcategory || "");
  }, [selectedCategory, selectedSubcategory]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.nameTag.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleLoadMore = () => {
    setProductsToShow(productsToShow + productsPerPage);
  };

  const handleMobileLoadMore = () => {
    setMobileProductsToShow(mobileProductsToShow + mobileProductsPerPage);
  };

  const handleShowLess = () => {
    setProductsToShow(productsPerPage);
    setMobileProductsToShow(mobileProductsPerPage);
  };

  const visibleProducts = filteredProducts.slice(0, productsToShow);
  const mobileVisibleProducts = filteredProducts.slice(0, mobileProductsToShow);

  useEffect(() => {
    if (categories.length === 1) {
      setSelectedCategory(categories[0].id);
    }
  }, [categories]);

  return (
    <Container>
      <div className="fixed bottom-0 right-0 z-[50] block sm:hidden p-4">
        <MobileCart />
      </div>
      <div className="space-y-10 pb-10">
        <ProductsHero />
        <div className="hidden md:flex mx-6 gap-16 items-end" id="products">
          <Filter
            name="Categorías"
            valueKey="categoryId"
            data={categories}
            selectedValue={selectedCategory}
            setSelectedValue={setSelectedCategory}
            disabled={categories.length === 1}
          />
          <Filter
            name="Subcategorías"
            valueKey="subcategoryId"
            data={subcategories}
            selectedValue={selectedSubcategory}
            setSelectedValue={setSelectedSubcategory}
            disabled={subcategories.length === 1}
          />
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSearch();
            }}
          >
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <button type="submit">
                  <Search className=" text-cyan-700" />
                </button>
              </span>
              <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full bg-white placeholder:font-italitc  rounded-full py-2 pl-10 pr-4 focus:outline-none border-2 border-cyan-700 text-cyan-700 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 transition-all duration-300 ease-in-out"
                placeholder="Buscar"
              />
            </label>
          </form>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center">
          <div className="flex items-center md:hidden" id="productsmobile">
            <MobileFilters
              nameCategorias="Categorías"
              nameSubcategorias="Subcategorías"
              categories={categories}
              subcategories={subcategories}
              selectedSubcategory={selectedMobileSubcategory}
              setSelectedSubcategory={setSelectedMobileSubcategory}
            />
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSearch();
              }}
              className="flex md:hidden"
            >
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <button type="submit">
                    <Search className=" text-cyan-700" />
                  </button>
                </span>
                <Input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="w-[90%] bg-white placeholder:font-italitc  rounded-full py-2 pl-10 pr-4 focus:outline-none border-2 border-cyan-700 text-cyan-700 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 transition-all duration-300 ease-in-out"
                  placeholder="Buscar"
                />
              </label>
            </form>
          </div>
          <div
            className="mt-6 lg:col-span-4 lg:mt-0 justify-center flex-col items-center hidden sm:flex min-h-[550px]"
            id="products"
          >
            {isLoading ? (
              <div className="flex justify-center items-center w-full h-full">
                <ClipLoader color="#0e7490" loading={isLoading} size={50} />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {visibleProducts.map((item) => (
                    <ProductCard key={item.id} data={item} />
                  ))}
                </div>

                <div className="mt-4">
                  {filteredProducts.length > productsToShow && (
                    <button
                      onClick={handleLoadMore}
                      className="bg-cyan-700 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-cyan-600"
                    >
                      Ver más productos
                    </button>
                  )}
                  {productsToShow > productsPerPage && (
                    <button
                      onClick={handleShowLess}
                      className="ml-4 bg-cyan-700 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-cyan-600"
                    >
                      Mostrar menos productos
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0 justify-center flex-col items-center flex sm:hidden min-h-[550px]">
            {isLoading ? (
              <div className="flex justify-center items-center w-full h-full">
                <ClipLoader color="#0e7490" loading={isLoading} size={50} />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {mobileVisibleProducts.map((item) => (
                    <ProductCard key={item.id} data={item} />
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  {filteredProducts.length > mobileProductsToShow && (
                    <button
                      onClick={handleMobileLoadMore}
                      className="bg-cyan-700 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-cyan-600"
                    >
                      Ver más productos
                    </button>
                  )}
                  {mobileProductsToShow > mobileProductsPerPage && (
                    <button
                      onClick={handleShowLess}
                      className="ml-4 bg-cyan-700 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-cyan-600"
                    >
                      Mostrar menos productos
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
