import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';
import FilterBar from './components/FilterBar.jsx';
import './App.css';

export default function App() {
  
  return (
    <div className='min-h-screen bg-gray-100 p-5'>
      <div className='w-full max-w-2xl mx-auto bg-white p-5 rounded shadow'>
        <h2 className='text-3xl font-bold text-center text-red-400'>React ToDo App</h2>

        <TodoInput />
      </div>
      <div className='w-full max-w-2xl mx-auto mt-4 bg-white p-5 rounded shadow'>
        <FilterBar/>
        <TodoList/>
      </div>
    </div>
  );

}


