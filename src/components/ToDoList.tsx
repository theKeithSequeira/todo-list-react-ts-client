import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

interface ToDoListProps { }

const ToDoList: React.FC<ToDoListProps> = () => {
    return (
        <React.Fragment>
            <Container component="main">
                <Paper>
                    <Grid container sx={{ display: "flex", flexDirection: "column" }} spacing={2}>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment >
    )
}

export default ToDoList
