"use client";
import ProductCard from "@/components/ui/product-card-home";
import { Product } from "@/types";
import Link from "next/link";
import { AiFillRightCircle } from "react-icons/ai";
import NoResults from "@/components/ui/no-results";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./ui/carrusel.css";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );
  const moveLeft = () => {
    slider.current?.prev();
  };

  const moveRight = () => {
    slider.current?.next();
  };
  return (
    <div className="space-y-4 2xl:pt-8 ">
      <div className="flex 2xl:justify-between 2xl:pb-3 2xl:mx-6 2xl:flex-row flex-col gap-4 none-display">
        <h2 className="font-bold text-5xl font-['Brevia'] text-cyan-700">
          Productos Destacados
        </h2>
        <Link
          href="/products"
          className=" rounded-[45px] 2xl:w-[20%] bg-cyan-700 hover:bg-cyan-600 text-center justify-center inline-flex items-center  text-xl font-semibold text-white transition-all ease-in duration-200"
        >
          Ver todos los productos
        </Link>
      </div>
      {items.length === 0 && <NoResults />}
      <div className="wrapper carousel-container">
        {/* Botón Izquierda */}
        <div className=" hidden 2xl:flex w-full h-full absolute">
          <button
            onClick={moveLeft}
            className="carousel-button h-16 w-16 text-3xl text-white items-center justify-center text-center rounded-full bg-cyan-700 left"
            aria-label="Anterior"
          >
            {"<"}
          </button>
          <button
            onClick={moveRight}
            className="carousel-button  h-16 w-16 text-3xl text-white items-center justify-center text-center rounded-full bg-cyan-700 right"
            aria-label="Siguiente"
          >
            {">"}
          </button>
        </div>
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            {items.map((item) => (
              // Envuelve cada clase 'carousel__cell para manipular la animación'
              <div className="carousel__cell" key={item.id}>
                <ProductCard data={item} />
              </div>
            ))}
          </div>
          {/* Botón Derecha */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
