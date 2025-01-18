import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Task from "../components/Task";
import ShowTask from "./ShowTask";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/task/get-all-task`
        );
        const responseData = await response.json();
        if (response.ok) {
          setTasks(responseData.taskData);
        } else {
          console.error("Error fetching tasks:", responseData.message);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };
    getTask();
  }, []);

  const openModal = (task) => {
    console.log("Opening modal with task:", task);
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const updateTask = (updatedTask) => {
    console.log("Updating task:", updatedTask);
    // Add logic to send the updated task to the API
    closeModal();
  };

  return (
    <div>
      <Navbar />
      <div className="pt-8 bg-gray-800 min-h-screen">
        <div className="max-w-4xl mx-auto bg-slate-300 rounded-lg p-6 shadow-lg">
          <h1 className="text-2xl font-extrabold text-gray-800 mb-4 border-b-2 border-gray-400 pb-1">
            View Task
          </h1>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task key={task._id} props={task} openModal={openModal} />
            ))
          ) : (
            <>Loading...</>
          )}
        </div>

        {/* Modal Box */}
        <ShowTask
          isOpen={isModalOpen}
          task={selectedTask}
          onClose={closeModal}
          onUpdate={updateTask}
        />
      </div>
    </div>
  );
};

export default TaskListPage;
