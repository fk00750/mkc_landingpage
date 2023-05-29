import React from "react";
import {
  Navbar,
  Footer,
  HeroSection,
  FeatureSection,
  SubjectSection,
} from "../Components/HomeComponents";

function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <SubjectSection />
      <Footer />
    </div>
  );
}

export default Home;
