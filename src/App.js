import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
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
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // Add the functionality to toggle your todo's completed flag from false to true
  // Add the ability to remove any todos that you have completed. .filter will be your best friend here. When a user clicks on the Clear Completed button call your handler function that will filter out any todos that have the completed flag toggled to true.
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
