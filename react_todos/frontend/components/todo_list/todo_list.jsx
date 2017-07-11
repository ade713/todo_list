import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => {
  const todoListItems = todos.map((todo, idx) => (
    <TodoListItem key={idx} todo={todo} />
  ));

  return (
    <div className="todo-list">
      <ul className="todo-list-items">
        { todoListItems }
      </ul>
    </div>
  );
};

// <div>
//   <ul>
//     {
//       todos.map((todo, idx) => <li key={idx}>{todo.title}</li>)
//     }
//   </ul>
// </div>

export default TodoList;
