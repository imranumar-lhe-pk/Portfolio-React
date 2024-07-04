import React from "react";
import skeliton from "../../Assets/skeliton.jpg";
import skelitonn from "../../Assets/skelitonn.jpg";
import vector from "../../Assets/Vector 26.png";
import frame from "../../Assets/Frame 48.png";
import customer from "../../Assets/Customer Journey.png";
import frame1 from "../../Assets/Frame (1).png";
import frame2 from "../../Assets/Frame (2).png";
import framee from "../../Assets/Frame.png";

function PgImage() {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-center lg:space-x-5 mt-10">
        <img
          src={frame1}
          alt="Group"
          className="w-[80vw] lg:w-[25vw] h-auto drop-shadow-lg lg:h-[25vw] mb-5 lg:mb-0"
        />
        <img
          src={frame2}
          alt="Group"
          className="w-[80vw] lg:w-[25vw] h-auto drop-shadow-lg lg:h-[25vw]"
        />
        <img
          src={framee}
          alt="Group"
          className="w-[80vw] lg:w-[25vw] h-auto drop-shadow-lg lg:h-[25vw]"
        />
      </div>
      <div className="">
        <p className="text-gray-400 text-center">Planificación de tareas </p>
      </div>
      <div className="container mx-auto mt-10 px-5">
        <div className="md:w-1/2 mx-auto">
          <span className="">
            <img
              src={frame}
              alt="Shape"
              className="w-8 md:w-7 lg:w-[50vw] drop-shadow-2xl my-10"
            />
          </span>
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
          <span className="">
            <img
              src={customer}
              alt="Shape"
              className="w-8 md:w-7 lg:w-[50vw] drop-shadow-2xl my-10"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PgImage;
