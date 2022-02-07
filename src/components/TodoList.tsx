import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import CardActions from "@mui/material/CardActions";

import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";
import TodoCard from "./TodoCard";
import { Todo, TodoState } from "../type";

const ToDoList: React.FC<{}> = () => {
  const todos: { todos: Todo[] } = useSelector(
    (state: RootState) => state.todos
  );

  console.log(todos);

  return (
    <React.Fragment>
      <Container component="main">
        <Paper>
          <Grid
            container
            sx={{ display: "flex", flexDirection: "column" }}
            spacing={2}
          >
            {todos.todos.map((todo) => (
              <TodoCard key={todo.id} {...todo} />
            ))}
            <p></p>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default ToDoList;
