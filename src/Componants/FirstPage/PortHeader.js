import React from "react";
import logo from "../../Assets/Logo.png";
import LogoLinkedin from "../../Assets/Logo Be.svg";
import LogoBe from "../../Assets/Logo Linkedin.svg";
import deibble from "../../Assets/dribbble-ball-mark.svg";

function PortHeader() {
  return (
    <div className="w-full h-[10vh] flex justify-between items-center mt-5 px-5 md:px-20">
      <div className="flex items-center gap-5 md:gap-10">
        <img className="w-[37vw] md:w-[20vw]" src={logo} alt="Logo" />
        <div className="hidden sm:flex items-center">
          <p className="rounded-lg bg-sky-200  mt-1 p-1 px-2 text-xs text-sky-700 ">
            NOW AVAILABLE
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <img className="w-[6vw] md:w-[3vw]" src={LogoLinkedin} alt="LinkedIn" />
        <img className="w-[6vw] md:w-[3vw]" src={deibble} alt="Dribbble" />
        <img className="w-[6vw] md:w-[3vw]" src={LogoBe} alt="Behance" />
      </div>
    </div>
  );
}

export default PortHeader;
