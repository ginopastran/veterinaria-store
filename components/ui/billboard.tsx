import Link from "next/link";
import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard = () => {
  console
  return ( 
    <header className="relative text-gray-400 body-font w-full">
    <div className="relative w-full h-[700px]">
      <img
        src="image/ccc1.png"
        alt="background image"
        className="absolute inset-0 h-[700px] w-screen overflow-hidden"
      />
  
      <div className="absolute container md:min-w-full mx-auto flex pt-28 px-5 py-24 md:flex-row flex-col items-center ">
        <div className=" mx-auto flex px-5 py-24 md:py-0  flex-col md:flex-col items-center ">
          <div className="lg:flex-grow  md:text-center lg:pr-24 md:pr-16 flex flex-col md:items-start md:justify-center mb-16 md:mb-0 items-center text-center">
            <h1 className="text-cyan-700 text-4xl md:text-4xl xl:text-7xl font-bold font-[HvDTrial-Brevia]">
              Ellos eligen en Luffi
            </h1>
            <p className="text-cyan-800 text-base md:text-xl xl:text-2xl font-medium font-inter mb-8 leading-relaxed mx-12 md:mx-0 xl:mx-0">
              Una clínica veterinaria especializada a disposición de
              nuestros amigos peludos.
            </p>
            <div className="flex justify-center">
              <Link href="/servicios" className="w-[166px] h-[45px] rounded-[45px] border text-cyan-700 border-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:bg-cyan-700 hover:text-white  text-lg">
                Servicios
              </Link>
              <Link href="/productos" className="ml-4 w-[166px] h-[45px] rounded-[45px] border text-cyan-700 border-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:bg-cyan-700 hover:text-white  text-lg">
                Productos
              </Link>
             {/*  <Link href="/diversion" className="ml-4 w-[166px] h-[45px] rounded-[45px] border text-cyan-700 border-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:bg-cyan-700 hover:text-white  text-lg">
                Diversión
              </Link> */}
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="image/veteluffi_animales.png"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
   );
};

export default Billboard;
