import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
interface EditToDoProps { }

type ReactEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const EditToDo: React.FC<EditToDoProps> = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <>
            <Box component="form" marginTop={3} border={1} padding={5}>

                <h4>Edit To Do</h4>

                <TextField
                    required
                    id="title"
                    label="Title"
                    value={(event: ReactEvent) => { setTitle(event.target.value) }}
                />

                <TextField
                    required
                    id="description"
                    label="Description"
                    value={(event: ReactEvent) => { setDescription(event.target.value) }}
                />
            </Box>
        </>
    )
}

export default EditToDo
