import React from 'react';

const TodoListItem = ({ todo }) => (
  <div className="todo-list-item">
    <h3>
      <li>
        {todo.title}
      </li>
    </h3>
  </div>
);

export default TodoListItem;
