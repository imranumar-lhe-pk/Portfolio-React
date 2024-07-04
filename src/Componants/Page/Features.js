import React from "react";
import { IoMdArrowBack, IoMdArrowDropup, IoMdOpen } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function Features() {
  return (
    <div className="bg-white  rounded-lg shadow-2xl w-full sm:w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] md:h-[30vw] lg:h-[18vw] mx-auto p-5 md:p-10">
      <div>
        <p className="text-xl md:text-2xl mb-4">
          🔔 Iconos
          <span className="bg-sky-600 p-1 mx-2 rounded-lg">AT</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div>
          <p className="hidden md:block md:ml-[19vw] mt-4 md:mt-9 mb-2 text-gray-500 text-center md:text-left">
            Outlined
          </p>
          <div className="flex flex-col md:flex-row md:w-[30vw] md:min-h-[20vw] lg:min-h-[25vw] xl:min-h-[20vw] items-center md:items-start space-y-4 md:space-y-0 md:space-x-20">
            <p className="text-gray-500 mt-2 text-center md:text-left">
              Navigations
            </p>
            <div className="flex space-x-4">
              <div className="bg-white w-12 h-12 rounded-lg shadow-lg p-2 flex items-center justify-center">
                <IoArrowBack />
              </div>
              <div className="bg-white w-12 h-12 rounded-lg shadow-lg p-2 flex items-center justify-center">
                <IoArrowForward />
              </div>
              <div className="bg-white w-12 h-12 rounded-lg shadow-lg p-2 flex items-center justify-center">
                <IoMdArrowDropup />
              </div>
              <div className="bg-white w-12 h-12 rounded-lg shadow-lg p-2 flex items-center justify-center">
                <IoMdOpen />
              </div>
              <div className="bg-white w-12 h-12 rounded-lg shadow-lg p-2 flex items-center justify-center">
                <IoMdArrowBack />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:-mt-10 lg:-mt-32 ">
        <p className="text-gray-400 text-center md:text-left md:ml-[15vw]">
          Planificación de tareas
        </p>
      </div>
    </div>
  );
}

export default Features;
