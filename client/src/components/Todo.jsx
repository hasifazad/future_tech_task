import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, DialogActions } from '@mui/material';
import ViewData from './ViewData';
import axios from 'axios';
import EditData from './EditData';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Todo({ note, delStatus, setDelStatus, status }) {


    const onHandleDelete = () => {
        if (confirm('Really want to delete')) {
            axios.delete(`http://localhost:3000/api/data/delete-data/${note._id}`).then((res) => {
                console.log(res);
                setDelStatus(!delStatus)
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                // border: '1px solid',
                borderRadius: '10px',
                maxWidth: 300,
                flexGrow: 1,
                backgroundColor: '#e3e8ba',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    {/* <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="/static/images/grid/complex.jpg" />
                    </ButtonBase> */}
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            {/* <Typography gutterBottom variant="subtitle1" component="div">
                                Standard license
                            </Typography> */}
                            <Typography variant="body2" gutterBottom width={300} sx={{ wordWrap: 'break-word', }}>
                                {note?.note}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography> */}
                        </Grid>
                        <Grid item>
                            <DialogActions>
                                {/* <Button size='small' variant='outlined' color='secondary'>View</Button> */}
                                <ViewData note={note?.note} />
                                <EditData note={note} status={status} />
                                <Button size='small' variant='outlined' color='error' onClick={onHandleDelete}>Delete</Button>
                            </DialogActions>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">

                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}