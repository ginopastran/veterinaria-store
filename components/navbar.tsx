"use client";

import { useEffect } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

import NavbarActions from "@/components/navbar-actions";

import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleNavigation = (url: string) => {
    setOpen(false);
    window.location.href = url;
  };

  return (
    <div className="absolute w-full bg-transparent z-10 flex items-center justify-between lg:pt-7 lg:px-10 p-4 pt-10 px-9">
      <Link href="/" className="z-[60]">
        <img
          src="/image/luffilogo-horizontal.svg"
          alt="Luffi Logo"
          className="w-56 lg:w-80 "
          onClick={() => handleNavigation("/")}
        />
      </Link>
      <div className="lg:flex items-center gap-12 hidden">
        {/* <Link
          href={"/"}
          className=" font-semibold text-base text-cyan-700 hover:text-cyan-600"
        >
          Sobre Luffi
        </Link> */}
        {/* <Link
          href={"/services"}
          className=" font-semibold text-base text-cyan-700 hover:text-cyan-600"
        >
          Cuidado y Salud
        </Link> */}
        <Link
          href={"/products"}
          className=" font-semibold text-base text-cyan-700 hover:text-cyan-600"
        >
          Productos
        </Link>
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=2604599286&text&type=phone_number&app_absent=0"
          }
          className=" font-semibold text-base border-2 border-cyan-700 py-1 px-5 rounded-3xl text-cyan-700 hover:bg-cyan-700 hover:text-white transition duration-200 ease-in-out"
        >
          Contacto
        </Link>
        <NavbarActions />
      </div>
      <div className="flex lg:hidden text-cyan-700">
        <div className="z-[60]">
          <Hamburger toggled={isOpen} size={30} toggle={setOpen} rounded />
        </div>
        <AnimatePresence>
          {isOpen && (
            <div className="flex">
              <img
                src="image/products-background-mobile.png"
                alt="background image"
                className="absolute inset-0 min-h-screen w-full overflow-hidden top-0 z-50"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 shadow-4xl right-0 top-32 p-5 pt-0 flex flex-col gap-20 z-[60]"
              >
                <ul className="grid gap-10 mt-7">
                  {/* <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 / 10,
                    }}
                    className="w-full "
                  >
                    <Link
                      href={"/"}
                      className=" text-2xl text-cyan-700 hover:text-cyan-600 font-bold"
                    >
                      Sobre Luffi
                    </Link>
                  </motion.li> */}
                  {/* <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 / 10,
                    }}
                    className="w-full "
                  >
                    <Link
                      href={"/"}
                      className=" text-2xl text-cyan-700 hover:text-cyan-600 font-bold"
                    >
                      Cuidado y Salud
                    </Link>
                   </motion.li> */}
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 / 10,
                    }}
                    className="w-full "
                  >
                    <Link
                      href={"/products"}
                      className=" text-2xl text-cyan-700 hover:text-cyan-600 font-bold"
                      onClick={() => handleNavigation("/products")}
                    >
                      Productos
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 / 10,
                    }}
                    className="w-full flex justify-start"
                    onClick={() => handleNavigation("/cart")}
                  >
                    <NavbarActions />
                  </motion.li>
                </ul>
                <motion.div
                  className="flex gap-8"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 / 10,
                  }}
                >
                  <Link href="https://www.facebook.com/veterinarialuffi/">
                    <img src="/image/facebook-black.svg" alt="" className="" />
                  </Link>
                  <Link href="https://www.instagram.com/veterinarialuffi/?hl=es-la">
                    <img src="/image/instagram-black.svg" alt="" />
                  </Link>
                  <Link href="https://api.whatsapp.com/send/?phone=2604599286&text&type=phone_number&app_absent=0">
                    <img src="/image/whatsapp-black.svg" alt="" />
                  </Link>
                </motion.div>
                <motion.div
                  className="flex mt-8 gap-1 flex-col"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 / 10,
                  }}
                >
                  <h3 className="font-bold text-[#101010] text-xl">
                    Clínica Veterinaria Dr. Luffi
                  </h3>
                  <h3 className="text-[#101010] text-xl">Coronel Suárez 451</h3>
                </motion.div>
                <motion.div
                  className="flex gap-1 flex-col items-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 / 10,
                  }}
                >
                  <Link
                    href="https://api.whatsapp.com/send/?phone=2604599286&text&type=phone_number&app_absent=0"
                    className=" w-full rounded-3xl bg-cyan-700 text-white text-center py-2 px-5 hover:bg-cyan-600 text-2xl font-semibold"
                  >
                    Contacto
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
