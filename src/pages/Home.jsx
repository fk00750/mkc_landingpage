import React from "react";
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import FeatureSection from '../Components/FeatureSection'
import SubjectSection from '../Components/SubjectSection'
import Footer from '../Components/Footer'


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
