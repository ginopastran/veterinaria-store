"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import OrderCurrency from "@/components/ui/order-currency";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pago completado");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Algo salió mal, intente de nuevo");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    const price = item.offerPrice ? item.offerPrice : item.price;
    return total + Number(price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-bold text-gray-900">Resumen del pedido</h2>
      {items.map((item) => (
        <div className="flex justify-between items-center" key={item.id}>
          <h3>{item.name}</h3>
          <h3>
            <OrderCurrency
              value={item.offerPrice ? item.offerPrice : item.price}
            />
          </h3>
        </div>
      ))}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Total del pedido
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6  text-white"
      >
        Comprar
      </Button>
    </div>
  );
};

export default Summary;
