import React from "react";
import Todo from "./Todo";

function TodoList() {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      <Todo />
    </div>
  );
}

export default TodoList;
