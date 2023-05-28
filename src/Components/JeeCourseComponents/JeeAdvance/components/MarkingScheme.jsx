import React from "react";

function MarkingScheme() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{`JEE Advanced Marking Scheme: Paper 1`}</h1>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-300 text-black">
              <th className="px-4 py-2">Section</th>
              <th className="px-4 py-2">Question Type</th>
              <th className="px-4 py-2">Total Questions</th>
              <th className="px-4 py-2">Full Marks</th>
              <th className="px-4 py-2">Partial Marks</th>
              <th className="px-4 py-2">Negative Marks</th>
              <th className="px-4 py-2">Maximum Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">
                Single Correct Option
                <p>&nbsp;</p>
              </td>
              <td className="px-4 py-2">6</td>
              <td className="px-4 py-2">
                +4 If only (all) the correct option (s) is (are) chosen
              </td>
              <td className="px-4 py-2">
                +3- If all four options are correct, but only three options are
                chosen
                <br />
                +2 - If three or more options are correct, but only two options
                are chosen, both of the options must be correct
                <br />
                +1 - If two or more options are correct, but only one option is
                chosen, and it must be correct.
              </td>
              <td className="px-4 py-2">-2 (in all other cases)</td>
              <td className="px-4 py-2">-</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">One or more options is correct</td>
              <td className="px-4 py-2">6</td>
              <td className="px-4 py-2">
                +4 If only (all) the correct option (s) is (are) chosen
              </td>
              <td className="px-4 py-2">&nbsp; &nbsp; &nbsp; &nbsp; -</td>
              <td className="px-4 py-2">&nbsp; &nbsp; -</td>
              <td className="px-4 py-2">24</td>
            </tr>
            <tr>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">Numerical Value Answer</td>
              <td className="px-4 py-2">6</td>
              <td className="px-4 py-2">
                +3 if only the correct integer is entered
              </td>
              <td className="px-4 py-2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-</td>
              <td className="px-4 py-2">-1 in all other cases</td>
              <td className="px-4 py-2">24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarkingScheme;
