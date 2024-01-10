import Image from "next/image";
import Link from "next/link";

const ServicesHero = () => {
  console;
  return (
    <header className="relative text-gray-400 body-font w-full">
      <div className="relative w-full h-screen">
        <Image
          src="image/services-background.png"
          alt="background image"
          className="absolute inset-0 h-screen w-screen overflow-hidden"
        />

        <div className="absolute container mx-auto flex pt-28 px-5 md:flex-row flex-col items-center h-screen">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-screen">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pb-12">
              <h1 className="text-cyan-700 text-4xl md:text-4xl xl:text-7xl font-bold">
                Ellos eligen en Luffi
              </h1>
              <p className="text-cyan-800 text-base md:text-xl xl:text-2xl font-medium font-inter mb-8 leading-relaxed mx-12 md:mx-0 xl:mx-0">
                Una clínica veterinaria especializada a disposición <br />
                de nuestros amigos peludos.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/servicios"
                  className="w-[166px] h-[45px] rounded-[45px] bg-cyan-700 hover:bg-cyan-600 text-center justify-center inline-flex items-center  text-xl font-semibold text-white"
                >
                  Servicios
                </Link>
                <Link
                  href="/products"
                  className="ml-4 w-[166px] h-[45px] rounded-[45px] border-2 text-cyan-700 border-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:bg-cyan-700 hover:text-white text-xl font-semibold"
                >
                  Productos
                </Link>

                {/*  <Link href="/diversion" className="ml-4 w-[166px] h-[45px] rounded-[45px] border text-cyan-700 border-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:bg-cyan-700 hover:text-white  text-lg">
                Diversión
              </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ServicesHero;
