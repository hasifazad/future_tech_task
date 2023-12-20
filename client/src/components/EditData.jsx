import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Textarea from '@mui/joy/Textarea';

import axios from 'axios'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function EditData({ status, note }) {

    const [editNote, setEditNote] = useState('')


    const onHandleSubmit = () => {
        if (confirm('Are you sure want to edit')) {
            axios.put(`http://localhost:3000/api/data/edit-data/${note?._id}`, {
                note: editNote
            }).then((response) => {
                console.log(response);
                setEditNote('')
                status.setAddStatus(!status.addStatus)
                handleClose()

            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button size='small' variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Edit Your Note
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Textarea size='lg' value={editNote ? editNote : note?.note} onChange={(e) => setEditNote(e.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='success' onClick={onHandleSubmit}>
                        Save
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}