
export default function FilterBar({ filter, setFilter, searchTerm, onSearchChange}) {

  const btnClass = (type) =>
    `px-4 py-1 rounded ${filter === type ? 'bg-orange-500 text-white' 
      : 'bg-gray-100 px-2 py-1 rounded text-sm cursor-pointer text-gray-500'}`;

  const activeBtn = (type) => 
    `px-4 py-1 rounded text-sm cursor-pointer text-gray-500 
    ${filter === type ? 'bg-orange-500 text-white' 
     : 'bg-gray-100'
    }` 

  return (
    <div className="flex space-y-2 flex-col sm:flex-row sm:items-center pb-4 gap-2">
      <div className="space-x-2 sm:space-x-1">
        <button onClick={() => setFilter('all')}  className={activeBtn('all')}>All</button>
        <button onClick={() => setFilter('active')}  className={activeBtn('active')}>Active</button>
        <button onClick={() => setFilter('completed')}  className={activeBtn('completed')}>Completed</button>
      </div>
      <div className="">
        <input type="text" placeholder="Search" value={searchTerm}
          onChange={onSearchChange}
          className="w-full sm:w-50 border border-gray-300 px-2 py-1 focus:border-gray-300 focus:ring-1 focus:ring-gray-200 focus:outline-none transition"
        />
      </div>
    </div>
  );
}



