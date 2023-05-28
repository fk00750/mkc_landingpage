import React from "react";
import CourseDetails from "../Components/CourseComponents/CourseDetails";
import Header from "../Components/CourseComponents/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Course() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      {/* Neet Course Section  */}
      <div>
        {/* <Header /> */}
        <CourseDetails />
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default Course;
