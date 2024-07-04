import React from "react";
import group from "../../Assets/Group.png";
import cap1 from "../../Assets/cap1.png";
import cap2 from "../../Assets/cap2.png";
import cap3 from "../../Assets/cap3.png";
import Table from "../../Assets/Table.png";

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
        <img
          src={Table}
          alt="Group"
          className="max-w-[90vw] md:max-w-[50vw] h-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-4">
          <img
            src={cap1}
            alt="Cap 1"
            className="w-full md:w-[16vw] h-auto mb-4 md:mb-0"
          />
          <img
            src={cap2}
            alt="Cap 2"
            className="w-full md:w-[16vw] h-auto mb-4 md:mb-0"
          />
          <img src={cap3} alt="Cap 3" className="w-full md:w-[16vw] h-auto" />
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
    </div>
  );
}

export default Hero;
