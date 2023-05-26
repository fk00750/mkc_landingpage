import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BiologySyllabus from "../Components/SyllabusComponents/BiologySyllabus";
import ChemistrySyllabus from "../Components/SyllabusComponents/ChemistrySyllabus";
import Heading from "../Components/SyllabusComponents/NeetHeading";
import PhysicsSyllabus from "../Components/SyllabusComponents/PhysicsSyllabus";

function NeetSyllabus() {
  return (
    <div>
      <Navbar />
      <Heading />
      {/* Syllabus  */}
      <div className="syllabus_container bg-gray-200 flex items-center justify-center py-2 mx-24 rounded-md mt-6 my-10">
        <div className="physics_syllabus mx-2 my-2">
          <PhysicsSyllabus />
          <ChemistrySyllabus />
          <BiologySyllabus />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NeetSyllabus;
