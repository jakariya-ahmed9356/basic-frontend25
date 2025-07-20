
export default function TodoList() {

  const todos = [1, 2, 3, 4, 5 ];

  return (
    <ul>
      {todos.map((todo, i) =>
        <li
          key={i}
          className="flex items-center justify-between border border-gray-300 my-2 px-4 py-2 rounded-md bg-white shadow-sm"
        >
          {/* Left side: checkbox and text */}
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <input type="checkbox" className="w-5 h-5 text-blue-500" />
            <h4 className="text-gray-500 text-sm sm:text-base">Todo item name</h4>
          </div>

          {/* Right side: delete button */}
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
            ❌
          </button>
        </li>
      )}
      
    </ul>
  );


}


