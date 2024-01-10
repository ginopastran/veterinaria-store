"use client";

import Image from "next/image";

const CardHome = () => {
  return (
    <div className="relative grid place-items-center pt-64  ">
      <Image
        src="image/Somos-home.png"
        alt="pic"
        className="absolute 2xl:h-[76%] 2xl:w-[37%]  h-52 w-52 rounded-2xl  2xl:left-16 2xl:top-16 xl:left-16 xl:top-16 top-4 z-10"
      />
      <div className="   2xl:border 2xl:border-white 2xl:bg-gradient-to-br 2xl:from-transparent 2xl:to-cyan-700   my-20 mx-4 xl:rounded-3xl xl:mx-16 xl:p-6 xl:pt-9 xl:mb-10 2xl:rounded-3xl 2xl:mx-16 2xl:p-6 2xl:pt-9 2xl:mb-10 rounded-md">
        <div className="md:flex 2xl:px-24  max-w-max">
          <div className="flex-none 2xl:h-48 2xl:w-2/5 xl:h-48 xl:w-2/5 "></div>

          <div className="flex-col text-white">
            <p className=" text-center absolute  2xl:text-7xl text-2xl 2xl:top-10 2xl:right xl:text-7xl xl:top-10 xl:right font-bold top-60 font-['Brevia']">
              &quot;Trata a los Animales como te Gustaría
              <br /> ser Tratado&quot;
            </p>

            <p className=" md:block px-4 my-4  2xl:text-3xl xl:text-3xl text-xl text-left font-semibold">
              Nuestro equipo de veterinarios altamente calificados refleja la
              dedicación y profesionalismo que representa nuestro compromiso con
              la salud y bienestar animal. En Dr. Luffi, cada mascota recibe no
              solo tratamiento, sino también el afecto y el respeto que merece.
              Ellos son parte de nuestra familia y como tal, se merecen lo
              mejor.
            </p>
            <p className=" hidden md:block px-4 my-4 2xl:text-3xl xl:text-3xl text-left font-semibold">
              {" "}
              En nuestra clínica, no escatimamos esfuerzos en el compromiso con
              la salud y bienestar de tus mascotas. Más que un centro médico,
              somos un hogar completo con todo lo que necesitan tus fieles
              compañeros.
            </p>
          </div>
        </div>
        <div className="md:flex  2xl:pt-7 xl:pt-7 leading-none max-w-full">
          <p className="hidden md:block px-4 2xl:text-3xl xl:text-3xl text-left text-sm text-white font-semibold">
            {" "}
            En nuestra clínica, no escatimamos esfuerzos en el compromiso con la
            salud y bienestar de tus mascotas. Más que un centro médico, somos
            un hogar completo con todo lo que necesitan tus fieles compañeros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
