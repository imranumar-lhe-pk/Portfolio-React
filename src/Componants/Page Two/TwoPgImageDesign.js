import React from "react";
import cover from "../../Assets/1.0 3.png";
import banner from "../../Assets/1.0 4.png";
import img from "../../Assets/img.png";
import img2 from "../../Assets/img2.png";
import thumbnail from "../../Assets/Thumbnail.png";
import thumbnail1 from "../../Assets/Thumbnail (1).png";
import Footer from "../Page Two/Footer";

function ImageDesign() {
  return (
    <div className="w-full flex flex-col items-center my-10 px-4">
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
