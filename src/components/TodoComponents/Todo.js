// <Todo /> is a component that takes in the todo data and displays the task to the screen.
import React from 'react';

export default function Todo(props) {
    return(
        <li className={props.completed ? 'todo-task completed' : 'todo-task'} onClick={() => props.toggleTodo(props.id)}>
        {props.task}
        </li>
    )
}