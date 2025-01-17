import React, { useState } from "react";
import Badge from "../components/Badge";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";
import Navbar from "../components/Navbar";

const TaskListPage = () => {
  const tasks = [
    { id: 1, title: "Demo 1", description: "This is demo 1 and I am testing.", status: { color: "blue", text: "Pending" } },
    { id: 2, title: "Demo 2", description: "This is demo 2 and I am testing.", status: { color: "yellow", text: "Running..." } },
    { id: 3, title: "Demo 3", description: "This is demo 3 and I am testing.", status: { color: "green", text: "Complete" } },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Function to open the modal with the selected task
  const openModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div>
      <Navbar/>
      <div className="pt-8 bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-5 text-gray-900">View Task</h1>
        <hr className="mb-5 border-gray-300" />

        {tasks.map((task) => (
          <div
            key={task.id}
            className="border p-4 rounded-md bg-white mb-5 shadow-md flex justify-between items-center"
          >
            <div className="flex flex-col">
              <h3 className="text-lg font-bold flex items-center">
                {task.title}
                <Badge props={task.status} />
              </h3>
              <p className="text-sm text-gray-500 mt-2">{task.description}</p>
            </div>
            <div className="flex gap-3">
              {/* Edit Task Button */}
              <button
                onClick={() => openModal(task)}
                className="text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2"
              >
                <GrEdit className="text-xl transition-all scale-100 hover:scale-125 hover:rotate-180" />
              </button>
              {/* Delete Task Button */}
              <button
                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2"
                onClick={() => console.log(`Delete task ${task.id}`)}
              >
                <RiDeleteBin2Line className="text-xl transition-all scale-100 hover:scale-125 " />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Box */}
      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-100 w-96 p-6 rounded-lg shadow-lg relative transition-transform transform scale-95 hover:scale-100">
            <button
              className="absolute top-[-15px] right-[-14px] text-white  bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2"
              onClick={closeModal}
            >
              <CgCloseR className="text-xl transition-all scale-100 hover:scale-125 "/>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Task Details</h2>
            <form>
              <label className="block text-gray-700 font-semibold mb-2">Title</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md mb-4"
                value={selectedTask.title}
                
              />

              <label className="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea
                className="w-full p-2 border rounded-md mb-4"
                value={selectedTask.description}
                
              />

              <label className="block text-gray-700 font-semibold mb-2">Status</label>
              <select
                className="w-full p-2 border rounded-md mb-4"
                defaultValue={selectedTask.status.text}
              >
                <option value="Pending">Pending</option>
                <option value="Running">Running</option>
                <option value="Complete">Complete</option>
              </select>

              <button
                type="button"
                className="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800"
              >
                Update Task
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default TaskListPage;
