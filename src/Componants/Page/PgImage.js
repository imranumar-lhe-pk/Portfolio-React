import React from "react";
import skeliton from "../../Assets/skeliton.jpg";
import skelitonn from "../../Assets/skelitonn.jpg";
import vector from "../../Assets/Vector 26.png";

function PgImage() {
  return (
    <div>
      <div className="w-full flex justify-center my-10 ">
        <img
          src={skeliton}
          alt="Group"
          className="w-[25vw] shadow-lg h-[30vw]"
        />
        <img src={vector} alt="Group" className="w-[14vw] h-[25vw]" />
        <img
          src={skelitonn}
          alt="Group"
          className="w-[25vw] shadow-lg h-[30vw]"
        />
      </div>
      <div className="">
        <p className="text-gray-400 text-center">Planificación de tareas </p>
      </div>
      <div className="container mx-auto mt-10 px-5">
        <div className="md:w-1/2 mx-auto">
          <div className="text-2xl sm:text-3xl lg:text-6xl text-zinc-800 font-semibold px-2">
            Actualmente{" "}
          </div>
          <div className="mt-5 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-sky-500 px-3">
            <p className="w-full 2xl:text-xl 2xl:leading-tight">
              El proyecto se encuentra en mejora contínua, logrando consolidar
              por incrementos, todas sus vistas en el nuevo diseño. Se está
              coordinando el ejecutar Testeos de usabilidad con usuarios. Cada
              vez se busca centrar las decisiones de negocio y experiencia en
              los usuarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PgImage;
