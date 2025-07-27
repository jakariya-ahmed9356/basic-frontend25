import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

export default function App() {
  
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');
  // search and pagination 
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // handle add todo
  const handleAdd = (input) => {
    const newTodo = { id:Date.now(), input, completed: false }
    setTodos([newTodo, ...todos]);
    setCurrentPage(1); // reset page
  }

  // Delete Task
  const handleDel = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // check toggle
  const handleToggle = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed } : todo
    ))
  };

  // Handle edit
  const handleEdit = (id, newInput) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, input: newInput } : todo
    ));
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Handle filters
  const filteredByStatus = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; 
  });


  // Then filter by search term
  const filteredBySearch = filteredByStatus.filter(todo =>
    todo.input.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBySearch.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentTodos = filteredBySearch.slice(startIdx, startIdx + itemsPerPage);


  return (
    <div className='w-full min-h-screen bg-gray-100 p-5'>
      <div className='max-w-2xl mx-auto bg-white p-5 rounded shadow'>
        <h2 className='text-3xl font-bold text-center text-red-400'>React ToDo App</h2>

        <TodoInput onAdd={handleAdd}/>
      </div>
      <div className='w-full max-w-2xl mx-auto mt-4 bg-white p-5 rounded shadow'>
          
          <FilterBar 
            filter={filter}
            setFilter={setFilter}
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
          />
          <TodoList 
            todos={currentTodos}
            setTodos={setTodos}
            onDel = {handleDel}
            onToggle={handleToggle}
            onEdit={handleEdit}
          />
          {/* pagination  */}
          {totalPages > 1 && (
            <div className="flex justify-end mt-4">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 mx-1 rounded ${
                    currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}

      </div>
    </div>
  );

}


