import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {z, ZodError} from "zod"
import { getZodError } from "../helper/getZodError";
import { showToast } from "../helper/showToast";

const HomePage = () => {

  const [formData,setFormData] = useState()
  const [err,setError] = useState()
  
  const taskSchema = z.object({
      title:z.string().min(3,{message:"Title must be atleast 3 character long."}),
      description : z.string().min(3,{message:"Description must be atleast 3 character long."}).max(500,{message:"Length exceeds."})
  })

  const handleInput = (e)=> {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validatedData = taskSchema.parse(formData);
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/task/createtask`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(validatedData),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setFormData({});
      showToast("success", responseData.message); // Show success toast
    } catch (error) {
      if (error instanceof ZodError) {
        const getError = getZodError(error.errors);
        setError(getError);
      }
      showToast("error", error.message); // Show error toast
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center  bg-gray-800 mt-[15vh]">
        <div className="w-full max-w-md p-6 bg-slate-300 rounded-md shadow-lg">
          <h1 className="text-2xl font-extrabold text-gray-800 mb-4 border-b-2 border-gray-400 pb-1">Create Task</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="task-title" className="block text-lg font-semibold text-gray-700 mb-2">
              Title
            </label>
            {err && err.title && <span className="text-red-500 text-sm font-semibold">{err.title}</span>}
            <input
              value={formData?.title || ''}
              onChange = {handleInput}
              type="text"
              name="title"
              id="task-title"
              placeholder="Task Title..."
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 mb-4"
              required
            />

            <label htmlFor="task-desc" className="block text-lg font-semibold text-gray-700 mb-2">
              Description
            </label>


            {err && err.description && <span className="text-red-500 text-sm font-semibold">{err.description}</span>}

            <textarea
              value={formData?.description || ''}
              id="task-desc"
              name="description"
              onChange = {handleInput}
              placeholder="Task Description..."
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 mb-4"
              rows="4"
              required
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
