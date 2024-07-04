import React from "react";
import { useNavigate } from "react-router-dom";
import banner1 from "../../Assets/1banner.png";
import banner3 from "../../Assets/banner3.png";
import banner2 from "../../Assets/2nd banner.png";
import figma from "../../Assets/figma.png";
import checkout from "../../Assets/🛒 5.0.0 Checkout - Task flow.png";
import cardimage from "../../Assets/cardimg1.png";
import login from "../../Assets/[app] Log In.png";
import checkout2 from "../../Assets/Checkout.png";

function Card({ children, onClick }) {
  return (
    <div
      className="p-6 w-[30vw] overflow-hidden border border-gray-200 shadow-lg rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="flex">{children}</div>
    </div>
  );
}
function Cards() {
  const navigate = useNavigate();
  const handleFirstCardClick = () => {
    navigate("/allComponents");
  };
  const handleSecondCardClick = () => {
    navigate("/PageTwo");
  };
  return (
    <div className="p-24 gap-7 flex justify-between">
      {/* First Card */}
      <Card onClick={handleFirstCardClick}>
        <div className="px-2">
          <p className="text-sky-500 mt-3">Manantial</p>
          <p className="font-medium mt-10">Ecommerce</p>
          <p className="font-medium lg:w-[9vw]">Web responsive</p>
          <p className="text-sky-500 font-semibold mt-2">UX/UI Design</p>
          <img
            className="h-[7vw] mt-6 hidden lg:block"
            src={figma}
            alt="Figma"
          />
        </div>
        <div className="hidden lg:flex">
          <img className="h-[20vw] pl-20" src={banner1} alt="Banner 1" />
          <div className="flex -ml-12">
            <img className="h-[13vw]" src={banner3} alt="Banner 3" />
            <div className="w-[20vw] -ml-[3.8vw]">
              <img
                className="h-[13vw] w-[9.7vw]"
                src={banner3}
                alt="Banner 3"
              />
              <div className="flex -ml-[5vw] -mt-12">
                <img
                  className="h-[11vw] w-[11vw]"
                  src={banner2}
                  alt="Banner 2"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Second Card */}
      <Card onClick={handleSecondCardClick}>
        <div className="px-2 flex">
          <div className="">
            <p className="text-red-500 mt-3">CCU</p>
            <p className="font-medium mt-10">Ecommerce.</p>
            <p className="font-medium lg:w-[9vw]">Web responsive.</p>
            <p className="text-sky-500 font-semibold mt-2">
              Research, Product Design
            </p>
          </div>
          <div className="hidden lg:flex ml-4">
            <img className="h-[21vw]" src={checkout} alt="Checkout" />
          </div>
        </div>
      </Card>

      {/* Third Card */}
      <Card>
        <div>
          <p className="text-sky-500 mt-3">Manantial</p>
          <p className="font-medium mt-10">Ecommerce</p>
          <p className="font-medium lg:w-[9vw]">Web responsive</p>
          <p className="text-sky-500 font-semibold mt-2">UX/UI Design</p>
          <img
            className="h-[7vw] mt-6 hidden lg:block"
            src={figma}
            alt="Figma"
          />
        </div>
        <div className="hidden lg:flex">
          <img className="h-[15vw] ml-4" src={login} alt="Banner 1" />
          <div className="flex ml-4">
            <div className="flex w-[15vw]">
              <img
                className="h-[24vw] w-[20vw] ml-4"
                src={cardimage}
                alt="Banner 3"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Cards;
