import React, { useEffect, useState } from 'react';
import { Tasks } from './Tasks/Tasks';
import styles from './Todolist.module.css';


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
            timeCreated: new Date(),
            id: tasks.length,
            text: tasksInput,
            isDone: false,
            // timeIsDone: null, <-- can be added to sort arr by time when input checked was marked;
        }
        setTasks([newTask, ...tasks]);
        setTasksInput('');
    }

    const changeIsDone = (pos) => {
        const newTasks = tasks.map((el , index) => index === pos ? { ...el, isDone: !el.isDone } : el)
        setTasks(newTasks)
    }

    const deleteTask = (pos) => {
        const updatedTasks = tasks.filter((item, index) => index !== pos);
        setTasks(updatedTasks)
    }

    const taskList = tasks
        .map((el, index) => <Tasks
            deleteTask={deleteTask}
            changeIsDone={changeIsDone}
            id={index}
            task={el.text}
            isDone={el.isDone} />)

    const sortedTasks = tasks.sort((a, b) => a.isDone - b.isDone || b.timeCreated - a.timeCreated);

    useEffect(() => {
        setTasks(sortedTasks);
    }, [tasks])

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

            <ul className={styles.tasks} style={{ position: 'relative' }}>

                {taskList}

            </ul>
        </div>
    );
}


