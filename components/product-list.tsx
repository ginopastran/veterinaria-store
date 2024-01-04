"use client";
import ProductCardSlider from "@/components/ui/product-card";
import { Product } from "@/types";
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
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );
  return (
    <div className="space-y-4 pt-8 ">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            {items.map((item) => (
              // Envuelve cada clase 'carousel__cell para manipular la animación'
              <div className="carousel__cell" key={item.id}>
                <ProductCardSlider data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
