"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

interface CurrencyProps {
  value?: string | number;
  isStrikethrough?: boolean;
}

const Currency: React.FC<CurrencyProps> = ({
  value = 0,
  isStrikethrough = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`font-semibold text-2xl tracking-tight ${
        isStrikethrough ? "line-through text-gray-500" : ""
      }`}
    >
      {formatter.format(Number(value))}
    </div>
  );
};

export default Currency;
