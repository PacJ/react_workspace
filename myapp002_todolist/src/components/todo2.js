import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Label from './label2';

const Todo = () => {
  const { todos, updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label
                  todo={todo}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
