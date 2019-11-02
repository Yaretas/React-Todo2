import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

export default function TodoForm (props){
    return(
        <Form onSubmit={props.handleSubmit}>
            <FormGroup>
                <Label for="input-task">Task</Label>
                <input type="text" value={props.task} onChange={props.handleChange} />
            </FormGroup>
            <Button type='submit'>Add Task</Button>
            <Button onClick={props.clearCompleted}>Clear Tasks</Button>
        </Form>
    )
}
