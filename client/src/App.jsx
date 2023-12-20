import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import { Box, Container } from '@mui/material'
import AddData from './components/addData'


function App() {
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

export default App
