import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



const TodoList = ({ todos, receiveTodo }) => {

  const todoListItems = todos.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} />
  ));

  return (
    <div className="todo-list">
      <ul className="todo-list-items">
        { todoListItems }
      </ul>
      <ul>
        <TodoForm receiveTodo={receiveTodo}/>
      </ul>
    </div>
  );
};


export default TodoList;
