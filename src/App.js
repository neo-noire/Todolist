import React, { useState } from 'react';
import styles from './App.module.css'
import { Todolist } from './components/Todolist/Todolist';


function App() {

  const [titleInput, setTitleInput] = useState('');
  const todoText = React.createRef();
  const textInput = () => {
    const text = todoText.current.value;
    setTitleInput(text);
  }

  const [todo, setTodo] = useState([]);
  const addTodo = () => {
    if (titleInput === '') return
    const newArr = {
      id: todo.length,
      title: titleInput,
    }
    setTodo([newArr, ...todo]);
    setTitleInput('');
  }
  const deleteTodo = (pos) => {
    const newTodo = todo.filter((el) => el.id !== pos)
    setTodo(newTodo)

  }

  const lists = todo.map(el => <Todolist key={el.id} index={el.id} title={el.title} deleteTodo={deleteTodo} />);

  return (
    <div className={styles.App}>
      <div className='todoInput'>
        <input type='text'
          value={titleInput}
          onChange={textInput}
          ref={todoText}
          placeholder='Write toDo topic...' />
        <button onClick={addTodo}>Add To-Do</button>
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
