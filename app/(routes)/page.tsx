import React from "react";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list-home";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Carrusel from "@/components/ui/carrusel";
import CardHome from "@/components/card-home";
import UbicacionHome from "@/components/ubicacion";
import Image from "next/image";
import MobileCart from "@/components/mobile-cart";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      {/* <div className="fixed bottom-0 right-0 z-50 flex sm:hidden p-4">
        <MobileCart />
      </div> */}
      <Billboard />
      <div className="space-y-10">
        <div className="flex relative flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <img
            src="image/ccc3.png"
            alt=""
            className="absolute inset-0  w-screen"
          />
          <Carrusel />
          <ProductList title="Featured Products" items={products} />
        </div>
        <div className="relative h-full 2xl:w-full">
          <img
            src="image/ccc2.png"
            alt=""
            className="absolute inset-0 h-full w-screen object-fill"
          />
          <CardHome />
          <UbicacionHome />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
