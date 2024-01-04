"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";

const ProductsHero = () => {
  return (
    <main className="relative text-gray-400 body-font w-full h-screen">
      <div className="relative w-full h-screen">
        <img
          src="image/products-background.png"
          alt="background image"
          className="absolute inset-0 h-screen w-screen overflow-hidden hidden sm:flex"
        />
        <img
          src="image/products-background-mobile.png"
          alt="background image"
          className="absolute inset-0 h-screen w-screen overflow-hidden flex sm:hidden"
        />

        <div className="absolute container mx-auto flex pt-8 md:pt-28 px-5 py-24 md:flex-row flex-col items-center h-screen">
          <div className="container mx-auto flex px-5 py-24 sm:flex-row flex-col items-center h-screen ">
            <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pb-1 z-40 gap-6">
              <h1 className="text-cyan-700 text-5xl sm:text-5xl lg:text-6xl  font-bold font-[Brevia] max-w-3xl text-left ">
                Encontrá los mejores productos en Luffi
              </h1>
              <div className="flex flex-col">
                <p className="text-cyan-800 text-lg md:text-xl xl:text-xl font-medium font-inter mb-8 leading-relaxed xl:mx-0 max-w-2xl text-left">
                  Encontrá todos los productos necesarios para tu amigo de
                  cuatro patas en todas las etapas y momentos de su vida.
                </p>
                <p className="text-cyan-800 text-lg md:text-xl xl:text-xl font-medium font-inter mb-8 leading-relaxed xl:mx-0 max-w-2xl text-left hidden sm:flex">
                  Tenemos una gran variedad de alimentos, accesorios, productos
                  de estética e higiene, snacks y juguetes para que se divierta
                  al máximo.
                </p>
              </div>

              <div className="flex absolute bottom-0 pb-8 gap-8 pt-16 pl-2 z-40">
                <button
                  onClick={() =>
                    document
                      .getElementById("productsmobile")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className=" bg-cyan-700 text-white sm:p-3 p-2 rounded-full sm:mb-8 hover:bg-cyan-600 block sm:hidden"
                >
                  <ArrowDown width={30} height={30} />
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className=" bg-cyan-700 text-white sm:p-3 p-2 rounded-full sm:mb-8 hover:bg-cyan-600 hidden sm:block"
                >
                  <ArrowDown width={30} height={30} />
                </button>
              </div>
            </div>
            <div className=" z-20">
              <img
                className="object-cover object-center rounded absolute bottom-0 z-20 max-w-[40%] right-0 hidden lg:block"
                alt="hero"
                src="image/veteluffi_animales.png"
                width={580}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsHero;
