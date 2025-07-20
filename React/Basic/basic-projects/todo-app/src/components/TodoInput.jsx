export default function TodoInput() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ok');
  }

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} action="" 
      className="flex flex-col gap-2 sm:flex-row sm:gap-1 sm:items-center">
        <input type="text" placeholder="Add Task.." id="" 
        className="w-full p-2 border border-gray-300 rounded focus:border-red-300 focus:ring-1 focus:ring-red-200 focus:outline-none transition"
      />
      <button className="hover:border-red-300">Add</button>
      </form>
    </div>
  );
}


