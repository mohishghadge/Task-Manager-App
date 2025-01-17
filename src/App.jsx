
import './App.css'
import Layout from './components/Layout';
import HomePage from './pages/HomePage'
import ShowTask from './pages/ShowTask';
import TaskListPage from './pages/TaskListPage'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return (
    <>
   <Router>
      <Routes>
        {/* Redirect to login page by default */}
        <Route path="/" element={<Navigate to="/createtask" />} />
        <Route path="/createtask" element={<HomePage />} />
        <Route path="/tasklistpage" element={<TaskListPage />} />
        <Route path="/showtask/:taskid" element={<ShowTask />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
