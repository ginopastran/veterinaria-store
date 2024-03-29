"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { PImage } from "@/types";

import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface GalleryProps {
  images: PImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative h-full w-full sm:rounded-lg overflow-hidden">
              <img
                src={image.url}
                alt="Image"
                className="object-cover m-auto rounded-md"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
