"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category, Subcategory } from "@/types";

interface FilterProps {
  data: (Category | Subcategory)[];
  name: string;
  valueKey: string;
  selectedValue: string | null;
  setSelectedValue: (value: string | null) => void;
  disabled: boolean;
}

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
  selectedValue,
  setSelectedValue,
  disabled,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClick = (id: string) => {
    setSelectedValue(id === selectedValue ? null : id);

    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    // Utiliza el método push en lugar de replace para mantener el historial
    router.push(url);
  };

  return (
    <div className="">
      <h3 className="font-bold text-2xl mb-2 text-cyan-700">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-3xl text-normal text-cyan-700 p-2 bg-white border-2 border-cyan-700",
                selectedValue === filter.id && " bg-cyan-700 text-white"
              )}
              onClick={() => onClick(filter.id)}
              disabled={disabled}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
