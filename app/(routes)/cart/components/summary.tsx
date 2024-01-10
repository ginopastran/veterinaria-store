"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import OrderCurrency from "@/components/ui/order-currency";
import OrderForm from "./order-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Define la interfaz para los datos del formulario
interface FormData {
  email: string;
  name: string;
  phone: string;
  delivery: "pickup" | "delivery";
  address?: string;
}

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [isFormOpen, setIsFormOpen] = useState(false);

  interface OrderFormData {
    emailAddress: string;
    name: string;
    deliveryOption: "pickup" | "delivery";
    address?: string;
    phone: string;
  }

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

  const handleFormSubmit = async (values: OrderFormData) => {
    console.log(values);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
        orderFormData: values,
      }
    );

    window.location = response.data.url;
    return Promise.resolve();
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-bold text-gray-900">Resumen del pedido</h2>
      {items.map((item) => (
        <div className="flex justify-between items-center" key={item.id}>
          <h3>{item.nameTag}</h3>
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
      <Sheet>
        <SheetTrigger asChild>
          <Button
            disabled={items.length === 0}
            className="w-full mt-6  text-white"
          >
            Comprar
          </Button>
        </SheetTrigger>
        <SheetContent>
          <OrderForm onSubmit={handleFormSubmit} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Summary;
