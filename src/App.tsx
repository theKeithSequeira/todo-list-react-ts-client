import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditToDo from './components/EditToDo';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
  <Router>
  <Switch>
          <Route path="/edit">
            <EditToDo />
          </Route>
          
          <Route path="/">
            <ToDoList />
          </Route>
        </Switch>
  </Router>
    </div>
  );
}

export default App;
