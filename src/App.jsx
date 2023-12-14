import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue == null) return [];
		return JSON.parse(localValue);
	});

	function addTodo(title) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{
					id: crypto.randomUUID(),
					title: title,
					completed: false,
				},
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function deleteTodos(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<NewTodoForm addTodo={addTodo} />
			<h1 className="header">Todo List</h1>

			{todos.length === 0 && "No Todos"}

			<TodoList
				todos={todos}
				toggleTodo={toggleTodo}
				deleteTodos={deleteTodos}
			/>
		</>
	);
}
