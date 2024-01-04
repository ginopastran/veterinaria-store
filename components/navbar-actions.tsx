"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-transparent px-0 py-2 gap-x-3"
      >
        <h2 className="text-2xl text-cyan-700 hover:text-cyan-600 font-bold lg:hidden flex">
          Carrito
        </h2>
        <ShoppingBag size={25} color="#1d7681" />
        <span className="text-lg font-semibold text-cyan-700">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
