import React, { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();

      if (!input.trim()) return;
      
      onAdd(input);
      setInput('');
  }

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} action="" 
        className="flex flex-col gap-2 sm:flex-row sm:gap-1 sm:items-center">
          <input type="text" placeholder="Add New Task.."
          className="w-full p-2 border border-gray-300 rounded focus:border-red-300 focus:ring-1 focus:ring-red-200 focus:outline-none transition"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' className="bg-red-500 text-white px-4 py-2 cursor-pointer hover:bg-red-600 transition">Add</button>
      </form>
    </div>
  );
}


