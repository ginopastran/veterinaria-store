"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-black w-fit">{data.nameTag}</h1>
      <h2 className="text-lg font-semibold text-gray-900">{data.name}</h2>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-black font-bold">
          <Currency value={data?.price} isStrikethrough={!!data?.offerPrice} />
          {data?.offerPrice && <Currency value={data?.offerPrice} />}
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <p className=" font-medium text-gray-700">{data?.description}</p>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 bg-black"
        >
          Añadir al carrito
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
