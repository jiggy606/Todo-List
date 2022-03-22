import React from 'react';
import Todo from './Todo';
import { List } from '@material-ui/core';

function TodoList({todos, toggleComplete, removeTodo}) {
  return (
    <div>
        <List>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            ))}
        </List>
    </div>
  )
}

export default TodoList