
export default function FilterBar() {

  return (
    <div className="flex space-y-2 flex-col sm:flex-row sm:items-center pb-4 gap-2">
      <div className="space-x-2 sm:space-x-1">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="">
        <input type="text" placeholder="Search" 
          className="w-full sm:w-50 border border-gray-300 px-2 py-1 focus:border-gray-300 focus:ring-1 focus:ring-gray-200 focus:outline-none transition"
        />
      </div>
    </div>
  );
}



