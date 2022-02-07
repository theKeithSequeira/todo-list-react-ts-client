import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import CardContent from "@mui/material/CardContent";
import { useDispatch } from "react-redux";
//user imports
import { Todo } from "../type";
import { toggleTodoActionCreator } from "../state/action-creators/todos";

const TodoCard: React.FC<Todo> = (props: Todo) => {
  console.log(props);
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setChecked(event.target.checked);
    if (isChecked) {
      props.isComplete = true;
    }

    dispatch(toggleTodoActionCreator(props));
  };

  return (
    <>
      <Grid item>
        <Box sx={{ minWidth: 275 }}>
          <Paper variant="elevation" elevation={2}>
            <Card variant="outlined">
              <CardContent>
                <Checkbox
                  checked={props.isComplete}
                  onClick={() => {}}
                />
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
              </CardContent>
            </Card>
          </Paper>
        </Box>
      </Grid>
    </>
  );
};

export default TodoCard;
