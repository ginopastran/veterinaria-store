import React from "react";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard />
        <div className="flex flex-col gap-y-8 px-4  sm:px-6 lg:px-8 max-w-7xl m-auto ">
          <ProductList title="Productos recomendados" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
