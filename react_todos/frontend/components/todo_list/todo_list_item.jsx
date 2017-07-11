import React from 'react';

const TodoListItem = ({ todo }) => (
  <div className="todo-list-item">
    <h3>
      {todo.title}
    </h3>
  </div>
);

export default TodoListItem;
