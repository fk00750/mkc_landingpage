import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/FeeStructureComponents/Header";
import Cards from "../Components/FeeStructureComponents/Cards";
import Features from "../Components/FeeStructureComponents/Features";
import FeeTable from "../Components/FeeStructureComponents/FeeTable";
import Notice from "../Components/FeeStructureComponents/Notice";

// Is there any flaw or erro the follow components
function FeeStructure({ EXAM }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Fee Structure Section  */}
      <div className=" border-2 border-dashed border-black mx-4 my-4">
        <Header EXAM={EXAM} />
        <Cards />
        <Features />
        <FeeTable />
        <Notice />
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default FeeStructure;
