import React from "react";

function TodoItem({id, completed, title, toggleTodo, deleteTodos}) {
	return (
		<li>
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={(e) => {
						return toggleTodo(
							id,
							e.target.checked
						);
					}}
				/>
				{title}
			</label>
			<button
				onClick={() => deleteTodos(id)}
				className="btn btn-danger"
			>
				Delete
			</button>
		</li>
	);
}

export default TodoItem;
