import { useDispatch, useSelector } from 'react-redux';
import Label from './label3';

const Todo = () => {
  const todos = useSelector((todos) => todos);
  //   const dispatch = useDispatch();
  //   const todos = dispatch({ type: 'LIST' });

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label todo={todo}></Label>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
