import React from "react";
import PortHeader from "../Componants/FirstPage/PortHeader";
import Card from "../Componants/FirstPage/Cards";
import Footer from "../Componants/FirstPage/Footer";
import HeroSection from "./FirstPage/HeroSection";

function FirstPgCom() {
  return (
    <div>
      <PortHeader />
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
}

export default FirstPgCom;
