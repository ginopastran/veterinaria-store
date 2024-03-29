import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <img
        src={data.images[0].url}
        alt=""
        className="object-cover m-auto rounded-md"
      />
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between flex-col">
            <p className="text-lg font-bold text-black">{data.nameTag}</p>
            <p className="text-base font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            {/* <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p> */}
          </div>
          <div className="flex flex-col">
            <Currency
              value={data?.price}
              isStrikethrough={!!data?.offerPrice}
            />
            {data?.offerPrice && <Currency value={data?.offerPrice} />}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
