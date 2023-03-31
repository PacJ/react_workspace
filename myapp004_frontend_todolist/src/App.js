import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { baseUrl, baseURL } from './apiurl';

// SOP(Same-Origin Policy) vs CORS(Cross-Origin Resource Sharing)
// fetch vs axios

function App() {
  const inputRef = useRef('');

  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  // let boardList = [
  //   { id: 1, todoname: '운동하기', completed: 0 },
  //   { id: 2, todoname: 'SNS꾸미기', completed: 0 },
  //   { id: 3, todoname: '사진정리하기', completed: 0 },
  // ];

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, todoname: input, completed: 0 },
    ]);

    await axios
      .post(baseUrl + '/todo/', { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput('');
        getTodos();
      });
    setInput('');
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateTodo = async (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      )
    );

    let completed = todos.filter((todo) => todo.id === id)[0].completed;
    console.log(completed);
    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //function getTodos(){}
  const getTodos = async () => {
    await axios
      .get(`${baseUrl}/todo/all`)
      .then((response) => {
        console.log(response);
        console.log('axios console');
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // .then(setTodos(todos.map((todo) => todo.id == )));

    console.log('after axios is called');
  };

  useEffect(() => {
    getTodos();
    inputRef.current.focus();
    console.log('useEffect');
  }, []);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type='text'
          required={true}
          value={input}
          onChange={handleChangeText}
          ref={inputRef}
        />
        <input type='submit' value='Create' />
      </form>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed == 1 ? 'completed' : null}
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                  >
                    {todo.todoname}
                  </label>
                  <label
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    &nbsp;&nbsp;삭제
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
