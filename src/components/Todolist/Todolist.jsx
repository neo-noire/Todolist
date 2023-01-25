import React, { useEffect, useState } from 'react';
import styles from './Todolist.module.css'

export const Todolist = (props) => {

    const deleteTodo = () => {
        props.deleteTodo(props.index)
    }

    const [tasksInput, setTasksInput] = useState('');

    const tasksRef = React.createRef();
    const textInput = () => {
        const text = tasksRef.current.value;
        setTasksInput(text)
    }

    const [tasks, setTasks] = useState([]);
    const addTask = () => {
        setTasks([tasksInput, ...tasks]);
        setTasksInput('');
    }

    const taskList = tasks.map(el=> <li>{el}</li>)



    return (
        <div>
            <div className="header">
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                    <button onClick={deleteTodo}>X</button>
                </div>
                <div className={styles.tasksInput}>
                    <input type="text"
                        ref={tasksRef}
                        onChange={textInput}
                        value={tasksInput}
                        placeholder="Add task..." />
                    <span className={styles.addBtn} onClick={addTask} >Add</span>
                </div>
            </div>

            <ul>
                {taskList}
            </ul>
        </div>
    );
}


