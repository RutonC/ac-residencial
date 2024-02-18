import React from "react";
import house from "../../assets/img/house.png";

function HeroSection() {
  return (
    <section className="pt-24 bg-secondary-200">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:px-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
          <h1 className="text-5xl font-extrabold leadi sm:text-6xl">
            Oferecemos uma
            experiência{" "}
            <span className="text-primary-800">única e inesquecível</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            {" "}
            Férias em família ou uma pausa relaxante, nossas casas são o cenário
            perfeito para a sua próxima aventura à beira-mar.
            <br className="hidden md:inline lg:hidden" />
            Reserve agora e mergulhe em uma experiência única de hospitalidade e
            beleza costeira.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-primary-800 dark:text-gray-900"
            >
              Registrar
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Saber Mais
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={house} alt="" className="object-contain h-64 sm:h-80 lg:h-74 xl:h-80 2xl:h-80"/>
		</div>
      </div>
    </section>
  );
}

export default HeroSection;
