import React, { useState } from "react";
import PreFoundationBanner from "./PreFoundationComponents.jsx/Banner";
import Biology from "./SubjectsComponent/Biology";
import Chemistry from "./SubjectsComponent/Chemistry";
import Math from "./SubjectsComponent/Math";
import Physics from "./SubjectsComponent/Physics";

/**
 * Refactor the following code, when the pre foundation button is clicked our newly created pre foundation banner should appear
 */
function SubjectSection() {
  const [selectedSubjects, setSelectedSubjects] = useState([
    "Physics",
    "Chemistry",
    "Biology",
  ]);
  const [selectedExam, setSelectedExam] = useState("NEET");
  const [showPreFoundationBanner, setShowPreFoundationBanner] = useState(false);

  const handleSubjectChange = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id === "NEET") {
      setSelectedSubjects(["Physics", "Chemistry", "Biology"]);
      setSelectedExam("NEET");
      setShowPreFoundationBanner(false);
    } else if (id === "JEE") {
      setSelectedSubjects(["Physics", "Chemistry", "Math"]);
      setSelectedExam("JEE");
      setShowPreFoundationBanner(false);
    } else if (id === "Pre-Foundation") {
      setSelectedSubjects([]);
      setSelectedExam("Pre-Foundation");
      setShowPreFoundationBanner(true);
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8">
          Subject Sections (Physics, Chemistry, Biology, Mathematics):
        </h1>
        <div className="flex justify-center space-x-4 mb-2">
          <button
            id="NEET"
            className={`${
              selectedExam === "NEET" ? "bg-blue-500" : "bg-gray-500"
            } px-4 rounded-sm text-xl text-white`}
            onClick={handleSubjectChange}
          >
            NEET
          </button>
          <button
            id="JEE"
            className={`${
              selectedExam === "JEE" ? "bg-green-500" : "bg-gray-500"
            } px-4 rounded-sm text-xl text-white`}
            onClick={handleSubjectChange}
          >
            JEE
          </button>
          <button
            id="Pre-Foundation"
            className={`${
              selectedExam === "Pre-Foundation"
                ? "bg-yellow-600"
                : "bg-gray-500"
            } px-4 rounded-sm text-xl text-white`}
            onClick={handleSubjectChange}
          >
            Pre-Foundation
          </button>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:items-center justify-center md:flex-row lg:flex-row space-y-2 sm:justify-start">
          {selectedSubjects.includes("Physics") && (
            <div className="mx-2 w-full sm:w-auto">
              <Physics />
            </div>
          )}
          {selectedSubjects.includes("Chemistry") && (
            <div className="mx-2 w-full sm:w-auto">
              <Chemistry />
            </div>
          )}
          {selectedSubjects.includes("Biology") && (
            <div className="mx-2 w-full sm:w-auto">
              <Biology />
            </div>
          )}
          {selectedSubjects.includes("Math") && (
            <div className="mx-2 w-full sm:w-auto">
              <Math />
            </div>
          )}
          {showPreFoundationBanner && (
            <div className="container mx-auto">
              <div className="flex justify-center">
                <PreFoundationBanner />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectSection;
