import React, { useEffect, useState } from 'react';
import styles from './Tasks.module.css'

export const Tasks = (props) => {

    const changeStat = () => {
        props.changeIsDone(props.id)
    }

   
    return (
        <div>
            <input type='checkbox'
              onChange={changeStat}
              checked={props.isDone} />
            <span>{props.task}</span>
        </div>
    );
}


