"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const MobileCart = () => {
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
    <div className="flex items-center bg-cyan-700 rounded-full p-1">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-transparent px-0 py-2 gap-x-2"
      >
        <ShoppingBag size={25} color="#fff" />
        <span className="text-lg font-semibold text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default MobileCart;
