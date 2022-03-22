import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, TextField } from 'material-ui/core';

function TodoForm( {addTodo} ) {

  const [todo, setTodo] = useState({
      id: "",
      task: "",
      completed: false
  });

  function handleTaskInputChange(e) {
      setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }
    
  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <TextField
          onChange={handleTaskInputChange}
          value={todo.task}
          name="task"
          type="text"
          label="Task"
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default TodoForm;
