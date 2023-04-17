import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(
      `https://advanced-todo-app-json-server.onrender.com/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
