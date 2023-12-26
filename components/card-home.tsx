"use client";

const CardHome = () => {


  return (
    <section className="bg-transparent dark:bg-gray-900">
    <div className="absolute z-30 right-0 mt-2 mr-60">
      <h1 className="mt-2 text-2xl font-semibold text-cyan-900 text-center capitalize lg:text-3xl dark:text-white">
      "Trata a los Animales como te Gustaría <br/> ser Tratado”
      </h1>
    </div>

    <div className="max-w-6xl px-6 py-10 mx-auto">
      <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
        <div className="absolute w-full bg-gradient-to-br from-cyan-700 to-cyan-200 shadow-inner -z-10 md:h-96 rounded-2xl">
        </div>
        

        <div className="w-full p-6 bg-gradient-to-br from-cyan-700 to-cyan-100 shadow-inner md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
          <img
            className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl "
            src="image/Somos-home.png"
            alt="client photo"
            style={{ marginTop: "-5rem" }}
          />

          <div className="mt-2 md:mx-6" >
            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
              “Nuestro equipo de veterinarios altamente calificados refleja la
              dedicación y profesionalismo que representa nuestro compromiso
              con la salud y bienestar animal. En Dr. Luffi, cada mascota
              recibe no solo tratamiento, sino también el afecto y el respeto
              que merece. Ellos son parte de nuestra familia y como tal, se
              merecen lo mejor. En nuestra clínica, no escatimamos esfuerzos
              en el compromiso con la salud y bienestar de tus mascotas. Más
              que un centro médico, somos un hogar completo con todo lo que
              necesitan tus fieles compañeros.”.
            </p>
          </div>
        </div>
      </main>
    </div>
  </section>
  );
};

export default CardHome;
