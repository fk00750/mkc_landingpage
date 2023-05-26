import React from "react";
import Header from "../Components/ContactComponents/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      {/* Contact Us Section  */}
      <div>
        <Header />
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default Contact;
