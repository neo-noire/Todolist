import React from 'react';
import styles from './Tasks.module.css'

export const Tasks = (props) => {

    const changeStat = () => {
        props.changeIsDone(props.id)
    }

    const deleteTask = () => {
        props.deleteTask(props.id)
    }

    return (
        <label ref={props.ref} className={styles.tasks}>
            <input type='checkbox'
                onChange={changeStat}
                checked={props.isDone} />
            <span>{props.task}</span>
            <button onClick={deleteTask}>x</button>
        </label>
    );
}


