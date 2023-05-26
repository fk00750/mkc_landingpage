import React, { useState } from "react";
import Biology from "./SubjectsComponent/Biology";
import Chemistry from "./SubjectsComponent/Chemistry";
import Math from "./SubjectsComponent/Math";
import Physics from "./SubjectsComponent/Physics";

function SubjectSection() {
  const [selectedSubjects, setSelectedSubjects] = useState(["Physics", "Chemistry", "Biology"]);
  const [selectedExam, setSelectedExam] = useState("NEET");

  const handleSubjectChange = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id === "NEET") {
      setSelectedSubjects(["Physics", "Chemistry", "Biology"]);
      setSelectedExam("NEET");
    } else if (id === "JEE") {
      setSelectedSubjects(["Physics", "Chemistry", "Math"]);
      setSelectedExam("JEE");
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
        </div>
        <div className="flex">
          {selectedSubjects.includes("Physics") && (
            <div className="mx-2">
              <Physics />
            </div>
          )}
          {selectedSubjects.includes("Chemistry") && (
            <div className="mx-2">
              <Chemistry />
            </div>
          )}
          {selectedSubjects.includes("Biology") && (
            <div className="mx-2">
              <Biology />
            </div>
          )}
          {selectedSubjects.includes("Math") && (
            <div className="mx-2">
              <Math />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectSection;