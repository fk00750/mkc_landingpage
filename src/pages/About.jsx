import React from "react";
import ChairpersonAndDirectorMessage from "../Components/AboutComponents/ChairpersonAndDirectorMessage";
import Header from "../Components/AboutComponents/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      {/* About Section  */}
      <div>
        <Header />
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default About;
