import React, { useEffect, useState } from 'react';
import { Tasks } from './Tasks/Tasks';
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
        if (tasksInput === '') return
        const newTask = {
            id: tasks.length,
            text: tasksInput,
            isDone: false,
        }
        setTasks([newTask, ...tasks]);
        setTasksInput('');
    }

    const changeIsDone = (pos) => {
        const newTasks = tasks.map((el, index) => index === pos ? { ...el, isDone: !el.isDone } : el)
        setTasks(newTasks)
    }

    const taskList = tasks
        .map((el, index) => <Tasks changeIsDone={changeIsDone}
            key={index}
            id={index}
            task={el.text}
            isDone={el.isDone} />)

    useEffect(() => {
        console.log('tasks is been updated', tasks);
    }, [tasksInput])

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

            <ul className={styles.tasks}>
                {taskList}
            </ul>
        </div>
    );
}


