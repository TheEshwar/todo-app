import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodos }) {
	return (
		<ul className="list">
			{todos.map((todo) => {
				return (
					<TodoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodos={deleteTodos}
					/>
				);
			})}
		</ul>
	);
}

export default TodoList;
