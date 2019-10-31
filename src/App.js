import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props){
    super(props);
    this.state = {
      task: '',
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      task: ''
    });
  };

  clearCompleted = () => {
    const newTodo = this.state.todos.filter(todo => !todo.completed);
    this.setState({
      todos: newTodo
    });
  };

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    });
  };

  render() {
    return (
      <div>
        <h2>Today Todos</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
          handleChange={this.handleChange}
          task={this.state.task} />
      </div>
    );
  }
}

export default App;
