import React, { useState } from 'react';
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
                    <span className={styles.addBtn} >Add</span>
                </div>
            </div>

            <ul id="myUL">
                <li>Hit the gym</li>
                <li className="checked">Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>
        </div>
    );
}


