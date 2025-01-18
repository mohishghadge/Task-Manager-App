import React from "react";
import { CgCloseR } from "react-icons/cg";

const ShowTask = ({ isOpen, task, onClose, onUpdate }) => {
  if (!isOpen || !task) return null;

  const handleUpdate = () => {
    // Call the update function passed via props
    onUpdate(task);
  };

  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-100 w-96 p-6 rounded-lg shadow-lg relative transition-transform transform scale-95 hover:scale-100">
        <button
          className="absolute top-[-15px] right-[-14px] text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2"
          onClick={onClose}
        >
          <CgCloseR className="text-xl transition-all scale-100 hover:scale-125" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Task Details</h2>
        <form>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md mb-4"
            value={task.title}
            readOnly
          />

          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            className="w-full p-2 border rounded-md mb-4"
            value={task.description}
            readOnly
          />

          <label className="block text-gray-700 font-semibold mb-2">Status</label>
          <select
            className="w-full p-2 border rounded-md mb-4"
            value={task.status}
            onChange={(e) =>
              onUpdate({ ...task, status: e.target.value }) // Update the status
            }
          >
            <option value="Pending">Pending</option>
            <option value="Running">Running</option>
            <option value="Complete">Complete</option>
            <option value="Failed">Failed</option>
          </select>

          <button
            type="button"
            className="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800"
            onClick={handleUpdate}
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShowTask;
