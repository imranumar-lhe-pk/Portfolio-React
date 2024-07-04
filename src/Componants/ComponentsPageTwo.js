import React from "react";
import TwoPgBoxes from "../Componants/Page Two/TwoPgBoxes";
import TwoPgHero from "../Componants/Page Two/TwoPgHero";
import TwoPgImageDesign from "../Componants/Page Two/TwoPgImageDesign";
import TwoPageOne from "../Componants/Page Two/TwoPageOne";
import TwoPgImage from "../Componants/Page Two/TwoPgImage";
import Footer from "../Componants/Page Two/Footer";
function ComponentsPageTwo() {
  return (
    <div className="bg-[#F8F2FF]">
      <TwoPageOne />
      <TwoPgHero />
      <TwoPgBoxes />
      <TwoPgImage />
      <TwoPgImageDesign />
      <Footer />
    </div>
  );
}

export default ComponentsPageTwo;
