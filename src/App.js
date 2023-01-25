import React, { useEffect, useState } from 'react';
import styles from './App.module.css'
import { Todolist } from './components/Todolist/Todolist';





function App() {

  const [titleInput, setTitleInput] = useState('');
  const todoText = React.createRef();
  const textInput = () => {
    const text = todoText.current.value;
    setTitleInput(text);
  }

  const [todoTitle, setTodoTitle] = useState('');
  const addTitle = () => {
    setTodoTitle(titleInput);
    setTitleInput('');
  }

  const [todos, setTodos] = useState([])
  const deleteTodo = (pos) => {
    const newTodo = todos.filter((el) => el.id !== pos);
    setTodos(newTodo)
  }
  useEffect(() => {
    if (todoTitle === '') return
    const newArr = {
      id: todos.length,
      title: todoTitle,
      tasks: [],
    }
    setTodos([...todos, newArr])
  }, [todoTitle])

  
  const lists = todos.map(el => <Todolist key={el.id} index={el.id} title={el.title} deleteTodo={deleteTodo} />);

  return (
    <div className={styles.App}>
      <div className='todoInput'>
        <input type='text'
          value={titleInput}
          onChange={textInput}
          ref={todoText}
          placeholder='Write toDo topic...' />
        <button onClick={addTitle}>Add To-Do</button>
      </div>
      <div className={styles.todoLists}>
        {
          lists
        }
      </div>
    </div>
  );
}

export default App;
