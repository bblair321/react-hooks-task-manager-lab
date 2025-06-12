import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar /> {/* SearchBar renders input + filtered TaskList */}
    </div>
  );
}


export default App;
