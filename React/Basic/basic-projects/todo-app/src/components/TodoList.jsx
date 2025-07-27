import { use, useState } from "react";
export default function TodoList({ todos, setTodos, onDel, onToggle , onEdit}) {

  const [editingId, setEditingId] = useState(null)
  const [editInput, setEditInput] = useState('');

  const saveEditedTodo = () => {
    if (editInput.trim() === '') return; // prevent empty update
    setTodos(todos.map(todo =>
      todo.id === editingId
        ? { ...todo, input: editInput }
        : todo
    ));
    setEditingId(null);
    setEditInput('');
  };

  return (
    <ul>
      {todos.map((todo) =>
        <li
          key={todo.id}
          className="flex items-center justify-between border border-gray-300 my-2 px-4 py-2 rounded-md bg-white shadow-sm"
        >
          {/* Left side: checkbox and text */}
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <input type="checkbox" 
              className="w-5 h-5 text-blue-500" 
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            {editingId === todo.id ? (
              <input value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') saveEditedTodo();
              }}
              onBlur={saveEditedTodo}
              autoFocus
                className="border px-2 py-2 rounded"
              />
            ) : (
              <span
                onDoubleClick={() => {
                  setEditingId(todo.id);
                  setEditInput(todo.input)
                }}
                className={`cursor-pointer ${todo.completed ? 'line-through text-gray500' : ''}`}
              >
                {todo.input}
              </span>
            )}
        </div>

          {/* Right side: delete button */}
          <button 
            className="text-sm rounded-full p-1 hover:bg-red-600 transition"
             onClick={() => onDel(todo.id)}
          >
            ❌
          </button>
        </li>
      )}
      
    </ul>
  );


}


