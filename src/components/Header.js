import noteImage from "../assets/images/notes.png";
import doubleTickImage from "../assets/images/double-tick.png";
import plusImage from "../assets/images/plus.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { allCompleted, clearCompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

function Header() {
    const [input, setInput] = useState(null);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (input) {
            dispatch(addTodo(input));
        }
        setInput("");
    };

    return (
        <div>
            <form
                onSubmit={submitHandler}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo..."
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    className="flex space-x-1 cursor-pointer"
                    onClick={() => dispatch(allCompleted())}
                >
                    <img
                        className="w-4 h-4"
                        src={doubleTickImage}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li
                    className="cursor-pointer"
                    onClick={() => dispatch(clearCompleted())}
                >
                    Clear completed
                </li>
            </ul>
        </div>
    );
}

export default Header;
