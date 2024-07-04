import React from "react";
import logo from "../../Assets/Logo.png";
import LogoLinkedin from "../../Assets/Logo Be.svg";
import LogoBe from "../../Assets/Logo Linkedin.svg";
import deibble from "../../Assets/dribbble-ball-mark.svg";

function Footer() {
  return (
    <div className="w-full bg-[#E7EFF4] h-auto py-4 flex flex-col md:flex-row justify-between items-center mt-5 px-5 md:px-20">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 md:gap-52 mb-4 md:mb-0">
        <div className="flex items-center">
          <p className="text-xs text-center sm:text-left">
            Tu feedback es bienvenido 👍🏻
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-xs text-center sm:text-left">
            Cristopher Galarce Arcila Product Designer
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <img className="w-8 md:w-6 lg:w-4" src={LogoLinkedin} alt="LinkedIn" />
        <img className="w-8 md:w-6 lg:w-4" src={deibble} alt="Dribbble" />
        <img className="w-8 md:w-6 lg:w-4" src={LogoBe} alt="Behance" />
      </div>
    </div>
  );
}

export default Footer;
