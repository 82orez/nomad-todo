export default function TodoSection({ todos, handleToggleComplete, handleDeleteTodo }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="container mx-auto max-w-md rounded-lg bg-white p-4 shadow-md">
      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">할 일 목록</h2>
        <TodoList todos={activeTodos} handleToggleComplete={handleToggleComplete} handleDeleteTodo={handleDeleteTodo} />
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">완료된 목록</h2>
        <TodoList todos={completedTodos} handleToggleComplete={handleToggleComplete} handleDeleteTodo={handleDeleteTodo} isCompleted={true} />
      </div>
    </div>
  );
}

function TodoList({ todos, handleToggleComplete, handleDeleteTodo, isCompleted = false }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
          isCompleted={isCompleted}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, handleToggleComplete, handleDeleteTodo, isCompleted }) {
  return (
    <li className={`flex items-center justify-between gap-2 ${isCompleted ? "text-gray-500" : ""}`}>
      <div className="flex items-center gap-2">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleComplete(todo.id)}
            className="h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 checked:border-transparent checked:bg-green-500 focus:outline-none"
          />
          <svg
            className={`pointer-events-none absolute inset-0 h-6 w-6 ${todo.completed ? "text-white" : "text-gray-400"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
            {todo.completed ? <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /> : null}
          </svg>
        </div>
        <span className={isCompleted ? "line-through" : ""}>{todo.text}</span>
      </div>
      <button onClick={() => handleDeleteTodo(todo.id)} className="p-1 text-red-500 hover:text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
}
