import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";
import Badge from "./Badge";

const Task = ({ props, openModal, fetchTasks }) => {
  const [badgeColor, setBadgeColor] = useState();

  useEffect(() => {
    if (props.status === "Pending") {
      setBadgeColor("blue");
    } else if (props.status === "Running") {
      setBadgeColor("yellow");
    } else if (props.status === "Complete") {
      setBadgeColor("green");
    } else if (props.status === "Failed") {
      setBadgeColor("red");
    }
  }, [props.status]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/task/delete-task/${props.id}`,
        { method: "DELETE" }
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      // Fetch tasks again to refresh the list
      fetchTasks();
      alert("Task deleted successfully!"); // Replace with your toast system
    } catch (error) {
      console.error("Error deleting task:", error.message);
      alert("Failed to delete the task."); // Replace with your toast system
    }
  };

  return (
    <div>
      <div
        key={props.id}
        className="border p-4 rounded-md bg-white mb-5 shadow-md flex justify-between items-center"
      >
        <div className="flex flex-col">
          <h3 className="text-lg font-bold flex items-center">
            {props.title}
            <Badge props={{ color: badgeColor, text: props.status }} />
          </h3>
          <p className="text-sm text-gray-500 mt-2">{props.description}</p>
        </div>
        <div className="flex gap-3">
          {/* Edit Task Button */}
          <button
            onClick={() => openModal(props)} // This should pass the task correctly
            className="text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2"
          >
            <GrEdit className="text-xl transition-all scale-100 hover:scale-125 hover:rotate-180" />
          </button>
          {/* Delete Task Button */}
          <button
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2"
            onClick={handleDelete}
          >
            <RiDeleteBin2Line className="text-xl transition-all scale-100 hover:scale-125 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
