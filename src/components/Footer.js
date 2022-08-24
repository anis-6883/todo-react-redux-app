import { useDispatch, useSelector } from "react-redux";
import { statusChanged, colorChanged } from "../redux/filters/actions";

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No Task";
    case 1:
      return "1 Task";
    default:
      return `${no_of_todos} Tasks`;
  }
};

function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const todoRemaining = todos.filter((todo) => !todo.completed).length;
  const dispatch = useDispatch();
  const { status, colors } = filters;

  const handleColorChange = (color) => {
    colors.includes(color)
      ? dispatch(colorChanged(color, "removeColor"))
      : dispatch(colorChanged(color, "addColor"));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>${numberOfTodos(todoRemaining)} Left...</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => dispatch(statusChanged("All"))}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => dispatch(statusChanged("Incomplete"))}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => dispatch(statusChanged("Complete"))}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
}

export default Footer;
