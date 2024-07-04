import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import page2 from "../../Assets/page2.png";
import page1 from "../../Assets/page1.png";
import BackButton from "../BackButton";
function PageOne() {
  return (
    <div className="bg-[#F8F2FF] w-full h-auto px-4 pt-1">
      <div className="flex items-center mt-10">
        <div className="bg-white w-9 h-9 rounded-full p-2 flex items-center justify-center shadow-lg">
          <BackButton />
        </div>
        <p className="hidden md:block ml-4 md:ml-[20vw] text-center bg-slate-200 p-2 rounded-lg">
          Due to a Non-Disclosure Agreement, the information on this project is
          limited.
        </p>
      </div>
      <div className="w-full  flex flex-col md:flex-row justify-between items-center mt-10  px-5 md:px-20">
        <div className=" md:w-1/2">
          <div className="w-full md:w-[20vw] px-3 mb-2  leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500">
            <p>Web responsive. UX-UI Design</p>
          </div>
          <div className="text-2xl px-2 sm:text-3xl lg:text-6xl text-zinc-800 font-semibold">
            Manantial{" "}
          </div>
          <div className="w-full md:w-[40vw] px-3 mt-5  leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500">
            <p className="w-full sm:w-[40vw] md:w-[40vw] lg:w-[30vw] xl:w-[35vw] 2xl:w-[20vw] 2xl:text-xl 2xl:leading-tight">
              Participo en impulsar mejoras en UX y UI al Ecommerce web de
              Manantial.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full  MD:w-[22vw] px-5 mt-5  leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500">
              <p className="md:w-[30vw]">🔗 manantial.com</p>
            </div>
          </div>
        </div>
        <div className="md:-mt-20 mt-[19vw] lg:mt-[7%] xl:p-10 px-5 md:px-10 md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[400px] md:max-w-none">
            <img
              className="w-[60vw] md:w-[30vw]  mx-auto"
              src={page2}
              alt="Home"
            />
            <img
              className="w-[60vw] md:w-[10vw] -mt-[13vw] -ml-10 mx-auto"
              src={page1}
              alt="Home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
