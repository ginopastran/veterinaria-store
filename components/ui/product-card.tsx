"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    // router.push(`/product/${data?.id}`);
    previewModal.onOpen(data);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group max-w-[155px] min-h-[225px] sm:max-w-[285px] sm:min-h-[385px] cursor-pointer rounded-3xl border p-4 space-y-2 shadow-xl border-gray-300 flex flex-col justify-center"
    >
      {/* Image & actions */}
      <div className="rounded-xl relative">
        <img
          src={data.images?.[0]?.url}
          alt=""
          className="object-cover m-auto rounded-md"
        />
        <div className=" opacity-100 lg:opacity-0 group-hover:opacity-100 transition absolute w-full px-0 lg:px-6 lg:bottom-5 top-0 lg:top-auto hidden">
          <div className="sm:flex gap-2 lg:gap-x-6 lg:justify-center justify-between hidden">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-regular text-base text-black">{data.name}</p>
          <p className="font-bold text-base text-black">{data.nameTag}</p>
        </div>
        {/* Price & Reiew */}
        <div className="flex gap-4 flex-wrap">
          <Currency value={data?.price} isStrikethrough={!!data?.offerPrice} />
          {data?.offerPrice && <Currency value={data?.offerPrice} />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
