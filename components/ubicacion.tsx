"use client";
import React from "react";
import Link from "next/link";

const UbicacionHome = () => {
  return (
    <section className="2xl:relative  h-auto pb-5">
      <div className="relative 2xl:p-14 ">
        <div className="w-full  h-64 2xl:h-[651px]  overflow-hidden 2xl:rounded-3xl ">
          <img
            src="image/mapa.png"
            alt="mapa"
            className="object-bottom object-cover w-full h-full z-10  "
          />
        </div>
        <img
          src="image/logo.png"
          alt="mapa"
          className="absolute  h-16   left-32 bottom-10 z-0 2xl:h-[130px] 2xl:left-[42%] 2xl:bottom-52
          "
        />
        <img
          src="image/gatoHome.png"
          alt="mapa"
          className="absolute hidden 2xl:block z-0 2xl:left-20 2xl:bottom-5
          "
        />
      </div>
      <div className="  m-4 2xl:absolute 2xl:bottom-11 2xl:right-72 2xl:w-[500px] ">
        <div
          className="absolute hidden w-0 h-0 overflow-hidden triangle-left 2xl:top-24 -left-14 z-20 "
          id=""
        ></div>
        <div className="flex flex-col gap-3    2xl:justify-around  bg-white border  2xl:h-96  rounded-xl  backdrop-blur-xl py-8">
          <h2 className="text-2xl font-bold text-center text-slate-900 2xl:text-4xl 2xl:font-bold">
            San Rafael
          </h2>
          <div className="flex flex-col gap-4 z-0">
            <div className="flex gap-2 items-center ml-8 2xl:ml-16">
            <img src="image/home-location.png" alt=" whatsapp" className="h-8 " />

              <Link
                href="https://maps.app.goo.gl/37VvqgMMCYjGhDvD8"
                className="text-center text-black 2xl:text-lg 2xl:font-semibold"
              >
                Coronel Suárez 451
              </Link>
            </div>
            <div className="flex gap-2 items-center ml-8 2xl:ml-16">
              <img src="image/whatsapp.png" alt=" whatsapp" className="h-8" />
              <Link
                href="https://wa.me/+542604599286"
                className="text-center text-black 2xl:text-lg 2xl:font-semibold hover:bg-opacity-80 hover:text-cyan-700 focus-visible:ring"
              >
                26040000
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center">

          <Link
            href="/contacto"
            className="mt-4 mx-6 px-4 py-2 text-sm font-bold text-white bg-cyan-600 rounded-md 2xl:h-12 2xl:w-2/3 2xl:text-xl 2xl:text-center hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Eviar una consulta
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbicacionHome;
