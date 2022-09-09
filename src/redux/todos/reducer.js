import {
    LOADED,
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    TOGGLED,
} from "./actionTypes";

const initialState = [];

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxi, todo) => Math.max(maxi, todo.id), -1);
    return maxId + 1;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;

        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                },
            ];

        case TOGGLED:
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return { ...todo };
            });

        case COLORSELECTED:
            return state.map((todo) => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        color: action.payload.color,
                    };
                }
                return { ...todo };
            });

        case DELETED:
            return state.filter((todo) => todo.id !== action.payload);

        case ALLCOMPLETED:
            return state.map((todo) => {
                return { ...todo, completed: true };
            });

        case CLEARCOMPLETED:
            return state.filter((todo) => !todo.completed);

        default:
            return state;
    }
};

export default reducer;
