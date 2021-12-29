import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditToDo from "./components/EditToDo";
import Todos from "./components/TodoList";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAllTodoActionsCreator } from "./state/action-creators/todos";
import { RootState } from "./state/reducers";
import * as actionCreators from "./state/action-creators/todos";

function App() {
  const todos = useSelector((state: RootState) => state);
  console.log(todos);

  const dispatch = useDispatch();
  /*  const {
    createTodoActionCreator,
    updateTodoActionCreator,
    deleteTodoActionCreator,
    selectTodoActionCreator,
    toggleTodoActionCreator,
    fetchAllTodoActionsCreator,
  } = bindActionCreators(actionCreators, dispatch); */

  useEffect(() => {
    console.log(
      fetchAllTodoActionsCreator(dispatch).then((data) => console.log(data))
    );

    //   // return () => {};
  }, []);

  return (
    <>
      <Container>
        <Router>
          <Container component="header">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Link to="/">
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Link>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    To Do List
                  </Typography>

                  <Link to="/edit">
                    <Button
                      sx={{ color: "secondary" }}
                      variant="contained"
                      color="secondary"
                    >
                      Edit To Do List
                    </Button>
                  </Link>
                </Toolbar>
              </AppBar>
            </Box>
          </Container>
          <Switch>
            <Route path="/edit">
              <EditToDo />
            </Route>

            <Route path="/">
              <Todos />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
