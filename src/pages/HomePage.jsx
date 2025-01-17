import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center  bg-gray-800 mt-[15vh]">
        <div className="w-full max-w-md p-6 bg-slate-300 rounded-md shadow-lg">
          <h1 className="text-2xl font-extrabold text-gray-800 mb-4">Create Task</h1>
          <form>
            <label htmlFor="task-title" className="block text-lg font-semibold text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="task-title"
              placeholder="Task Title..."
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 mb-4"
            />
            <label htmlFor="task-desc" className="block text-lg font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="task-desc"
              placeholder="Task Description..."
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 mb-4"
              rows="4"
            />
            <button
              type="submit"
              className="w-full py-2 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
