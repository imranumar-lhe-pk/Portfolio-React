import React from "react";
import Home from "../../Assets/Home.png";
import Frame from "../../Assets/Frame 11.png";
import Frame12 from "../../Assets/Frame 12.png";
import Frame13 from "../../Assets/Frame 13.png";
import Frame14 from "../../Assets/Frame 14.png";
import Frame15 from "../../Assets/Frame 15.png";
import Frame17 from "../../Assets/Frame 17.png";
import Frame18 from "../../Assets/Frame 18.png";
import Frame16 from "../../Assets/Frame 16.png";

function HeroSection() {
  return (
    <div className="w-full  flex flex-col md:flex-row justify-between items-center mt-10 md:mt-[4vw] px-5 md:px-20">
      <div className="mt-10 md:mt-[5vw] md:w-1/2">
        <div className="text-2xl sm:text-3xl lg:text-6xl text-zinc-800 font-semibold">
          👋 Hi, I’m Cristopher
        </div>
        <div className="w-full md:w-[40vw] px-5 mt-5 md:mt-20 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500">
          <p className="w-full sm:w-[40vw] md:w-[40vw] lg:w-[30vw] xl:w-[35vw] 2xl:w-[20vw] 2xl:text-xl 2xl:leading-tight">
            I’m a{" "}
            <span className="text-gray-400 font-semibold">
              Product Designer
            </span>{" "}
            with a passion for participating in every stage of digital product,
            from <span className="text-gray-400 font-semibold">Discovery</span>{" "}
            to <span className="text-gray-400 font-semibold">Delivery</span>.
            Helping to focus the business goals on users.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full  MD:w-[22vw] px-5 mt-5 md:mt-20 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500">
            <p className="md:w-[30vw]">
              I’m looking for new opportunities. Previously I worked at
              Multiplica Talent Chile.
            </p>
          </div>
          <div className="w-full md:w-[15vw] px-5 mt-5 md:mt-20 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500">
            <p>Santiago de Chile</p>
            <a href="mailto:cristopher@galarce.pro">cristopher@galarce.pro</a>
          </div>
        </div>
        <div className="w-full md:w-[20vw] px-5 mt-5 md:mt-20 leading-7 md:leading-2 tracking-tight text-base md:text-lg text-gray-500">
          <p>👇 Check some projects</p>
        </div>
      </div>
      <div className="md:-mt-20 mt-[19vw] lg:mt-[13%] xl:p-10 px-5 md:px-10 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-[400px] md:max-w-none">
          <img
            className="absolute left-2/3 top-20   w-[12vw] md:w-[6vw]"
            src={Frame}
            alt="Frame"
          />
          <img
            className="absolute left-2/3 top-40 w-[30vw] md:w-[15vw]"
            src={Frame14}
            alt="Frame14"
          />
          <img
            className="absolute -top-10 w-[30vw] 2xl:-left-[2vw] 2xl:-top-[5vw] md:w-[15vw]"
            src={Frame16}
            alt="Frame16"
          />
          <img
            className="absolute left-1/3 w-[30vw] 2xl:-top-[3vw] -top-[1vw] md:w-[15vw]"
            src={Frame18}
            alt="Frame18"
          />
          <img
            className="w-[60vw] md:w-[25vw] shadow-lg mx-auto"
            src={Home}
            alt="Home"
          />
          <img
            className="absolute right-2/3 top-10 w-[12vw]  md:w-[6vw]"
            src={Frame12}
            alt="Frame12"
          />
          <img
            className="absolute right-2/3 top-1/3 w-[30vw] md:w-[15vw]"
            src={Frame17}
            alt="Frame17"
          />
          <img
            className="absolute left-36 -bottom-[2vw] w-[12vw] md:w-[6vw]"
            src={Frame13}
            alt="Frame13"
          />
          <img
            className="absolute left-48 -bottom-[11vw] w-[30vw] md:w-[15vw]"
            src={Frame15}
            alt="Frame15"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
