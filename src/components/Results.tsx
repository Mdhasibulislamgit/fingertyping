import React from "react";

// Define the props interface for the Results component
interface ResultsProps {
  isComplete: boolean; // Indicates if the results should be displayed
  timeElapsed: number; // Time taken for the task
  calculateWPM: () => string; // Function to calculate words per minute
  calculateAccuracy: () => string; // Function to calculate accuracy percentage
  correctAndWrongWords: { correctWords: number; wrongWords: number }; // Object containing correct and wrong word counts
  keystrokes: { correctKeystrokes: number; wrongKeystrokes: number }; // Object containing correct and wrong keystroke counts
  darkMode: boolean; // Flag for dark mode styling
}

// Results component definition
const Results: React.FC<ResultsProps> = ({
  isComplete,
  timeElapsed,
  calculateWPM,
  calculateAccuracy,
  correctAndWrongWords,
  keystrokes,
  darkMode,
}) => {
  // If the task is not complete, do not render the results
  if (!isComplete) return null;

  return (
    <div
      className={`mt-4 flex w-full flex-wrap gap-2 p-2 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white"
      }`}
    >
      {/* Display Time, WPM, and Accuracy */}
      <div className="flex w-full flex-wrap gap-2 md:gap-4">
        <div
          className={`flex-1 rounded-lg p-2 text-center ${
            darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-900"
          }`}
        >
          <p className="text-sm font-semibold">Time</p>
          <p className="text-lg font-bold text-green-500">{timeElapsed}s</p>
        </div>
        <div
          className={`flex-1 rounded-lg p-2 text-center ${
            darkMode
              ? "bg-gray-700 text-gray-200"
              : "bg-green-100 text-green-800"
          }`}
        >
          <p className="text-sm font-semibold">WPM</p>
          <p className="text-lg font-bold text-green-500">{calculateWPM()}</p>
        </div>
        <div
          className={`flex-1 rounded-lg p-2 text-center ${
            darkMode
              ? "bg-gray-700 text-gray-200"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          <p className="text-sm font-semibold">Accuracy</p>
          <p className="text-lg font-bold text-green-500">
            {calculateAccuracy()}%
          </p>
        </div>
      </div>

      {/* Display Correct and Wrong Words */}
      <div className="mt-2 flex w-full flex-wrap gap-2">
        <div
          className={`flex-1 rounded-lg p-2 text-center ${
            darkMode ? "bg-gray-700 text-gray-200" : "bg-blue-100 text-blue-800"
          }`}
        >
          <p className="text-sm font-semibold">Correct Words</p>
          <p className="text-lg font-bold text-green-500">
            {correctAndWrongWords.correctWords}
          </p>
        </div>
        <div
          className={`flex-1 rounded-lg p-2 text-center ${
            darkMode ? "bg-gray-700 text-gray-200" : "bg-red-100 text-red-800"
          }`}
        >
          <p className="text-sm font-semibold">Wrong Words</p>
          <p className="text-lg font-bold text-red-500">
            {correctAndWrongWords.wrongWords}
          </p>
        </div>
      </div>

      {/* Display Correct and Wrong Keystrokes */}
      <div className="mt-2 flex w-full flex-wrap gap-2">
        <div
          className={`flex-1 rounded-lg p-2 text-center ${
            darkMode
              ? "bg-gray-700 text-gray-200"
              : "bg-green-100 text-green-800"
          }`}
        >
          <p className="text-sm font-semibold">Correct Keystrokes</p>
          <p className="text-lg font-bold text-green-500">
            {keystrokes.correctKeystrokes}
          </p>
        </div>
        <div
          className={`flex-1 rounded-lg p-2 text-center ${
            darkMode
              ? "bg-gray-700 text-gray-200"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          <p className="text-sm font-semibold">Wrong Keystrokes</p>
          <p className="text-lg font-bold text-red-500">
            {keystrokes.wrongKeystrokes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
