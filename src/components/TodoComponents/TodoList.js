import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
export default function TodoList (props){
    return(
        <ul className='todo-list'>
            {props.todos.map(
                todo => <Todo key={todo.id} {...todo} toggleTodo={props.toggleTodo} />
            )}
        </ul>
    )
}
// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.


