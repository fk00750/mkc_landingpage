import React from "react";
import { useNavigate } from "react-router-dom";

function MathSyllabus() {
  const class11Physics = [
    "Physical World and Measurement",
    "Kinematics",
    "Laws of Motion",
    "Work, Energy and Power",
    "Motion of System of Particles and RigidBody",
    "Gravitation",
    "Properties of Bulk Matter",
    "Thermodynamics",
    " Behaviour of Perfect Gas and KineticTheory",
    "Oscillations and Waves",
  ];

  const class12Physics = [
    "Electrostatics",
    "Current Electricity",
    "Magnetic Effects of Current and Magnetism",
    "Electromagnetic Induction andAlternating Currents",
    "Electromagnetic Waves",
    "Optics",
    "Dual Nature of Matter and Radiation",
    "Atoms and Nuclei",
    "Electronic Devices",
  ];

  // While navigating to another page, the new page does not appear from top instead it appears from the point where it clicked
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const id = e.target.id;
    if (id === "class11") {
      navigate("/physics-detailed-syllabus-class-11");
    } else if (id === "class12") {
      navigate("/physics-detailed-syllabus-class-12");
    }

    window.scrollTo(0, 0);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Maths Syllabus</h2>

      <table className="w-full table-auto border border-white">
        <thead>
          <tr>
            <th className="bg-blue-500 text-white border border-r-0 px-4 py-2  rounded-tl-md">
              📐 Maths syllabus for Class 11th
              <button
                id="class11"
                onClick={handleClick}
                className="bg-white px-2 mx-1 rounded-sm text-sm text-blue-500"
              >
                View in detail
              </button>
            </th>
            <th className="bg-blue-500 text-white border border-l-0 px-4 py-2  rounded-tr-md">
              📐 Maths syllabus for Class 12th
              <button
                id="class11"
                onClick={handleClick}
                className="bg-white px-2 mx-1 rounded-sm text-sm text-blue-500"
              >
                View in detail
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({
            length: Math.max(class11Physics.length, class12Physics.length),
          }).map((_, index) => (
            <tr className="bg-white" key={index}>
              <td className="border border-gray-500 px-4 py-2">
                {class11Physics[index] && (
                  <span className="border-2 border-blue-500 px-2 py-1 text-blue-500 mr-2">
                    {index + 1}.
                  </span>
                )}
                {class11Physics[index]}
              </td>
              <td className="border border-gray-500 px-4 py-2">
                {class12Physics[index] && (
                  <span className="border-2 border-blue-500 px-2 py-1 text-blue-500 mr-2">
                    {index + 1}.
                  </span>
                )}
                {class12Physics[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="my-2 flex justify-end mx-2">
        <button className="bg-blue-500 px-4 rounded-sm text-xl text-white hover:bg-blue-600">
          View in detail
        </button>
      </div> */}
    </div>
  );
}

export default MathSyllabus;
