import React, { useRef, useContext } from "react";
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const searchRef = useRef();
  const { setSearchTerm } = useContext(TaskContext);

  function handleSearch() {
    setSearchTerm(searchRef.current.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        ref={searchRef}
        onChange={handleSearch}
      />
      <TaskList />
    </div>
  );
}


export default SearchBar;
