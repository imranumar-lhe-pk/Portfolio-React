import React from "react";
import shape from "../../Assets/Shapee.png";
import info from "../../Assets/info.png";

function Boxes() {
  return (
    <div className="pt-2">
      <div className="container mx-auto mt-20">
        <div className="w-full sm:w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] mx-auto">
          <div className="text-lg sm:text-2xl lg:text-4xl text-zinc-800 font-semibold px-2">
            ‍💻 Workflow UI Design
          </div>
          <div className="mt-5 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500 px-3 text-center">
            <p className="w-full 2xl:text-xl 2xl:leading-tight">
              Me preocupé de nivelar un lenguaje común con el equipo de
              desarrollo. Comunico mi flujo de trabajo en 4 fases, para que el
              equipo de desarrollo sepa de donde obtener los assets.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center  items-center space-x-4 md:space-x-8 lg:space-x-10">
        <span className="text-4xl drop-shadow-2xl">✍️</span>
        <span>
          <img src={shape} alt="Shape" className="w-8 md:w-7 lg:w-8 mt-4" />
        </span>
        <span className="text-4xl drop-shadow-2xl">👀</span>
        <span>
          <img src={shape} alt="Shape" className="w-8 md:w-7 lg:w-8 mt-4" />
        </span>
        <span className="text-4xl drop-shadow-2xl">👍</span>
        <span>
          <img src={shape} alt="Shape" className="w-8 md:w-7 lg:w-8 mt-4" />
        </span>
        <span className="text-4xl drop-shadow-2xl">👍🚨</span>
      </div>
      <div className="container mx-auto mt-20">
        <div className="w-full sm:w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] mx-auto">
          <div className="text-md sm:text-md lg:text-xl text-zinc-800 font-semibold px-2">
            Evaluación heurística{" "}
          </div>
          <div className="mt-5 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-sky-500 px-3 ">
            <p className="w-full 2xl:leading-tight">
              Realicé una Evaluación Heurística por cada vista que debía
              trabajar. Luego creé una Tabla de mejoras de usabilidad en
              Ecommerce.
            </p>
          </div>
          <span className="">
            <img
              src={info}
              alt="Shape"
              className="w-8 md:w-7 lg:w-[50vw] drop-shadow-2xl my-10"
            />
          </span>
          <div className="">
            <p className="text-gray-400 text-center">
              Planificación de tareas{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-5">
        <div className="md:w-1/2 mx-auto">
          <div className="text-2xl sm:text-3xl lg:text-6xl text-zinc-800 font-semibold px-2">
            ⛰ Gran hito{" "}
          </div>
          <div className="mt-5 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-sky-500 px-3">
            <p className="w-full 2xl:text-xl 2xl:leading-tight">
              Logré que el cliente dejara en nuestras manos el diseño de las
              interfaces que buscarían mejorar la usabilidad. Utilicé wireframes
              para validar varios flujos y luego un taller de co-diseño con los
              stakeholders en donde se obtuvo un rediseño que es más flexible y
              consistente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
