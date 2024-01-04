import Link from "next/link";
import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard = () => {
  console;
  return (
    <header className="relative text-gray-400 body-font w-full">
      <div className="relative w-full h-screen">
        <img
          src="image/hero-img.png"
          alt="background image"
          className="absolute inset-0 h-screen w-screen overflow-hidden"
        />

        <div className="absolute container mx-auto flex pt-28 px-5 py-24 md:flex-row flex-col items-center h-screen">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-screen">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pb-12">
              <h1 className="text-cyan-700 text-5xl md:text-5xl xl:text-7xl font-bold font-[Brevia]">
                Ellos eligen en Luffi
              </h1>
              <p className="text-cyan-800 text-base md:text-xl xl:text-2xl font-medium font-inter mb-8 leading-relaxed mx-12 md:mx-0 xl:mx-0">
                Una clínica veterinaria especializada a disposición <br />
                de nuestros amigos peludos.
              </p>
              <div className="flex justify-center">
                {/* <Link
                  href="/servicios"
                  className="w-[166px] h-[45px] rounded-[45px] bg-cyan-700 hover:bg-cyan-600 text-center justify-center inline-flex items-center  text-xl font-semibold text-white transition-all ease-in duration-200"
                >
                  Servicios
                </Link> */}
                <Link
                  href="/products"
                  className="w-[166px] h-[45px] rounded-[45px] bg-cyan-700 hover:bg-cyan-600 text-center justify-center inline-flex items-center  text-xl font-semibold text-white transition-all ease-in duration-200"
                >
                  Productos
                </Link>

                {/*  <Link href="/diversion" className="ml-4 w-[166px] h-[45px] rounded-[45px] border text-cyan-700 border-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:bg-cyan-700 hover:text-white  text-lg">
                Diversión
              </Link> */}
              </div>
              <div className="absolute bottom-0 sm:hidden flex">
                <img
                  className="w-full z-20"
                  alt="hero"
                  src="image/veteluffi_animales.png"
                />
              </div>
              <div className="absolute bottom-0 pb-8 gap-8 pt-16 pl-2 hidden md:flex">
                <Link href="https://www.facebook.com/veterinarialuffi/">
                  <img src="/image/facebook.svg" alt="" />
                </Link>
                <Link href="https://www.instagram.com/veterinarialuffi/?hl=es-la">
                  <img src="/image/instagram.svg" alt="" />
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=2604599286&text&type=phone_number&app_absent=0">
                  <img src="/image/whatsapp.svg" alt="" />
                </Link>
              </div>
            </div>

            <img
              className="object-cover object-center rounded absolute bottom-0 z-20 max-w-[40%] right-0 hidden md:block"
              alt="hero"
              src="image/veteluffi_animales.png"
            />
            {/* <img
              src="image/intersect.svg"
              alt=""
              className="object-cover object-center rounded absolute bottom-0 z-0"
              style={{ right: 0, maxWidth: "60%" }}
            /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Billboard;
