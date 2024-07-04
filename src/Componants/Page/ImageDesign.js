import React from "react";
import cover from "../../Assets/1.0 3.png";
import banner from "../../Assets/1.0 4.png";
import img from "../../Assets/img.png";
import img2 from "../../Assets/img2.png";
import thumbnail from "../../Assets/Thumbnail.png";
import thumbnail1 from "../../Assets/Thumbnail (1).png";
import Footer from "../Page/Footer";

function ImageDesign() {
  return (
    <div className="w-full flex flex-col items-center my-10 px-4">
      <div className="w-full flex flex-col lg:flex-row justify-center lg:space-x-5 mb-10">
        <div className="flex flex-col items-center">
          <img
            src={cover}
            alt="Group"
            className="w-full lg:w-[50vw] lg:h-[75vw] shadow-sm mb-5 lg:mb-0"
          />
          <div className="w-full flex justify-center space-x-5">
            <img
              src={img2}
              alt="Group"
              className="w-[45vw] lg:w-[25vw] lg:h-[45vw]  mb-5 lg:mb-0"
            />
            <img
              src={img}
              alt="Group"
              className="w-[45vw] lg:w-[25vw] lg:h-[45vw] "
            />
          </div>
        </div>
        <img
          src={banner}
          alt="Group"
          className="w-full lg:w-[10vw] mt-5 lg:mt-[20vw] shadow-sm lg:h-[100vw]"
        />
      </div>
      <div className="max-w-screen-md text-center mb-8">
        <h1 className="font-bold leading-none tracking-tighter text-2xl lg:text-3xl mb-4">
          Gracias por mirar
        </h1>
        <p className="text-slate-500 mb-8">Volver al inicio</p>
      </div>
      <div className="w-full lg:max-w-screen-md text-center lg:text-left lg:-ml-[10vw] mb-8">
        <h1 className="font-bold leading-none tracking-tighter text-2xl lg:text-3xl mb-4">
          Otros proyectos
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center lg:space-x-5 mt-10">
        <img
          src={thumbnail}
          alt="Group"
          className="w-[80vw] lg:w-[35vw] h-auto drop-shadow-lg lg:h-[25vw] mb-5 lg:mb-0"
        />
        <img
          src={thumbnail1}
          alt="Group"
          className="w-[80vw] lg:w-[35vw] h-auto drop-shadow-lg lg:h-[25vw]"
        />
      </div>
    </div>
  );
}

export default ImageDesign;
