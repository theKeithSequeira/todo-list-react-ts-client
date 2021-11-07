import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

interface ToDoListProps {}

const ToDoList: React.FC<ToDoListProps> = () => {
  return (
    <React.Fragment>
      <Container component="main">
        <Paper>
          <Grid
            container
            sx={{ display: "flex", flexDirection: "column" }}
            spacing={2}
          >
            <Grid item>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined"></Card>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default ToDoList;
