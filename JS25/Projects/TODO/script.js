// script.js
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const filterButtons = document.querySelectorAll('.filters button');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let filter = 'all';

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    todos.push({ id: Date.now(), text, completed: false });
    input.value = '';
    saveAndRender();
  }
});

list.addEventListener('click', e => {
  const id = parseInt(e.target.closest('li')?.dataset.id);
  if (e.target.matches('.toggle')) {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  } else if (e.target.matches('.delete')) {
    todos = todos.filter(todo => todo.id !== id);
  }
  saveAndRender();
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filter = button.dataset.filter;
    render();
  });
});

function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}

function render() {
  list.innerHTML = '';
  const filtered = todos.filter(todo =>
    filter === 'all' ? true :
    filter === 'active' ? !todo.completed :
    todo.completed
  );

  filtered.forEach(todo => {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    li.className = todo.completed ? 'completed' : '';

    li.innerHTML = `
      <span class="toggle" style="cursor:pointer;">✔️</span>
      <span>${todo.text}</span>
      <span class="delete" style="cursor:pointer;">❌</span>
    `;
    list.appendChild(li);
  });
}

// Initial render
render();
