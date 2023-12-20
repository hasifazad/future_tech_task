import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import AddData from '../components/addData'
import TodoList from '../components/TodoList'

function Home() {
    const [addStatus, setAddStatus] = useState(true)

    return (
        <>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <AddData status={{ addStatus, setAddStatus }} />
                </Box>
                <TodoList addStatus={addStatus} status={{ addStatus, setAddStatus }} />
            </Container>
        </>
    )
}

export default Home