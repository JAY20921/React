import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Feature/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-900 rounded shadow-md">
      <h2 className="text-xl text-white font-semibold mb-4">Your Todos</h2>
      
      {todos.length === 0 ? (
        <p className="text-gray-400">No todos yet. Add one above!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 rounded"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
