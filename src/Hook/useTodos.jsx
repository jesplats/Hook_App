import { useReducer, useEffect } from "react";
import { todoReducer } from "../useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        dispatch({ type: "Add todo", payload: todo });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: "[TODO] Remove todo", payload: id });
    };

    const handleToggTodo = (id) => {
        dispatch({ type: "[TODO] Toggle todo", payload: id });
    };

    // Contadores
    const todosCount = todos.length;
    const pendingCount = todos.filter(todo => !todo.done).length;

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggTodo,
        todosCount,
        pendingCount
    };
};
