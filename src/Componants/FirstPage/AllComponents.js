import React from "react";
import PageOne from "./Page/PageOne";
import Hero from "./Page/Hero";
import Features from "./Page/Features";
import Boxes from "./Page/Boxes";
import PgImage from "./Page/PgImage";
import ImageDesign from "./Page/ImageDesign";
import Footer from "./Footer";

function AllComponents() {
  return (
    <div className="bg-[#F8F2FF] w-full">
      <PageOne />
      <Hero />
      <Features />
      <Boxes />
      <PgImage />
      <ImageDesign />
      <Footer />
    </div>
  );
}

export default AllComponents;
