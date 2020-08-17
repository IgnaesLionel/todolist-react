import React from 'react';
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './AddTask'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import initialData from '../initialData'


//  {...props}  =  toutes les propriétés actuel de react-router  +  tasks

class App extends React.Component{
  render(){
    return(
      <section id="todo">
        <BrowserRouter>
          <Switch>
            <Route path="/add-task" component = {AddTask}/>
            <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={initialData}/>}/>
            </Switch>
          <NavBar/>
        </BrowserRouter>
      </section>
    )
  }
}

export default App
