import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import { Grid } from '@mui/material'
import axios from 'axios'

function TodoList({ addStatus, status }) {

    const [notes, setNotes] = useState([])
    const [delStatus, setDelStatus] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:3000/api/data/get-data').then((res) => {
            console.log(res);
            setNotes([...res.data.notes])
        }).catch((error) => {
            console.log(error);
        })
    }, [delStatus, addStatus])

    return (
        <>
            <Grid container gap={3}>
                {
                    notes.map((data, i) =>
                        <Grid key={i} item>
                            <Todo note={data} delStatus={delStatus} setDelStatus={setDelStatus} status={status} />
                        </Grid>
                    )
                }
                {/* <Grid item border={1}>
                    <Todo />
                </Grid>
                <Grid item border={1}>
                    <Todo />
                </Grid>
                <Grid item border={1}>
                    <Todo />
                </Grid> */}
            </Grid>
        </>
    )
}

export default TodoList