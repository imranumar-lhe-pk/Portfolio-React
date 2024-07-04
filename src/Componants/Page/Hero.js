import React from "react";
import group from "../../Assets/Group.png";
import cap1 from "../../Assets/cap1.png";
import cap2 from "../../Assets/cap2.png";
import cap3 from "../../Assets/cap3.png";
import shape from "../../Assets/Shape.png";

function Hero() {
  return (
    <div className="bg-[#F8F2FF] min-h-screen px-4 py-8 flex flex-col justify-center items-center">
      <div className="max-w-screen-md text-center mb-8">
        <h1 className="font-bold leading-none tracking-tighter text-3xl mb-4">
          Acerca del proyecto
        </h1>
        <p className="text-slate-500 mb-8">
          Manantial es una compañía que vende agua purificada en varios
          formatos. A través de su sitio web, uno puede conocer los productos
          que están orientados a oficinas y lugares de trabajo como también al
          uso en el hogar.
        </p>
      </div>
      <div className="w-full flex justify-center mb-8">
        <img src={group} alt="Group" className="max-w-full h-auto" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-4">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4">
          <img src={cap1} alt="Cap 1" className="w-full md:w-[16vw] h-auto" />
          <img src={cap2} alt="Cap 2" className="w-full md:w-[16vw] h-auto" />
          <img src={cap3} alt="Cap 3" className="w-full md:w-[16vw] h-auto" />
        </div>
        <div className="flex items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-8 md:mt-0">
          <img src={shape} alt="Shape" className="w-10 mt-4" />
          <div className="ml-4 md:ml-0">
            <p>
              🔤 Tipografía{" "}
              <span className="bg-sky-600 p-1 rounded-lg">AT</span>
            </p>
            <p className="pt-2">Roboto Font Family</p>
            <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:gap-x-10 text-center md:text-left">
              <p className="bg-white font-semibold border border-gray-500 p-2 text-2xl md:text-3xl">
                Head
              </p>
              <p className="bg-white font-semibold border border-gray-500 p-2 text-2xl md:text-3xl">
                Subtitle
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-gray-400">
          Auditoría y consolidación de tipografías y textos utilizados
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-between md:gap-x-10">
        <span className="text-gray-500">Semana1</span>
        <span className="text-gray-500">Semana2</span>
        <span className="text-gray-500">Semana3</span>
        <span className="text-gray-500">Semana4</span>
        <span className="text-gray-500">Semana5</span>
      </div>
      <div className="mt-4">
        <span className="block ml-54 md:-ml-64 font-semibold text-sm w-32 bg-slate-200 p-2 rounded-lg">
          Auditoría UI{" "}
        </span>
      </div>
      <div className="mt-4 flex gap-y-2 flex-col md:flex-row md:justify-start md:gap-x-5">
        <span className="block font-semibold text-sm text-center md:text-left -ml-30 bg-slate-200 p-2 rounded-lg">
          UI Kit en Figma
        </span>
        <span className="block font-semibold text-sm text-center md:text-left bg-slate-200 p-2 rounded-lg">
          Refrescar Look n Feel{" "}
        </span>
        <span className="block font-semibold text-sm text-center ml-20 md:text-left bg-slate-200 p-2 rounded-lg">
          Evaluación Heurística{" "}
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-20">
        <span className="block font-semibold text-sm text-center md:text-left bg-slate-200 p-2 rounded-lg">
          Workflow UI{" "}
        </span>
        <span className="block font-semibold text-sm text-center md:text-left bg-slate-200 p-2 rounded-lg">
          Tabla de mejoras{" "}
        </span>
        <span className="block font-semibold text-sm text-center md:text-left bg-slate-200 p-2 rounded-lg">
          Rediseño de User Flows{" "}
        </span>
      </div>{" "}
      <div className="mt-8">
        <p className="text-gray-400">Planificación de tareas </p>
      </div>
      <div className="container mx-auto mt-10 px-5">
        <div className="md:w-1/2 mx-auto">
          <div className="text-2xl sm:text-3xl lg:text-6xl text-zinc-800 font-semibold px-2">
            🎨 UI Kit{" "}
          </div>
          <div className="mt-5 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500 px-3">
            <p className="w-full 2xl:text-xl 2xl:leading-tight">
              Trabajé en preparar el archivo de diseño para crear un UI Kit
              organizado en el que el equipo de desarrollo encontrara todas sus
              necesidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
