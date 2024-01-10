"use client";

import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Category, Subcategory } from "@/types";

import Filter from "./filter";

interface MobileFiltersProps {
  nameCategorias: string;
  nameSubcategorias: string;
  categories: Category[];
  subcategories: Subcategory[];
  selectedSubcategory: string | null;
  setSelectedSubcategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const MobileFilters = ({
  categories,
  subcategories,
  nameCategorias,
  nameSubcategorias,
}: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categories.length === 1 ? categories[0].id : null
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );

  useEffect(() => {
    const storedSubcategory = localStorage.getItem("selectedSubcategory");
    if (storedSubcategory) {
      setSelectedSubcategory(storedSubcategory);
    }
  }, []);

  useEffect(() => {
    if (categories.length === 1) {
      setSelectedCategory(categories[0].id);
    }
  }, [categories]);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 mx-6 md:hidden bg-cyan-700"
      >
        Filtros
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-between px-4">
              <img src="/image/luffilogo-horizontal.png" alt="" width={200} />
              <IconButton
                icon={<X size={15} />}
                className=" text-cyan-800"
                onClick={onClose}
              />
            </div>

            <div className="p-4 pt-10 gap-6 flex flex-col">
              <Filter
                name="Categorías"
                valueKey="categoryId"
                data={categories}
                selectedValue={selectedCategory}
                setSelectedValue={setSelectedCategory}
                disabled={categories.length === 1}
              />
              <Filter
                name="Subcategorías"
                valueKey="subcategoryId"
                data={subcategories}
                selectedValue={selectedSubcategory}
                setSelectedValue={setSelectedSubcategory}
                disabled={subcategories.length === 1}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
