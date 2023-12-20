import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import { Box, Container } from '@mui/material'
import AddData from './components/addData'
import UserContext from './context/UserContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import PrivateRoute from './PrivateRoute'
import Header from './components/Header'


function App() {


  return (
    <>
      <UserContext>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<Home />} path='/' />
            </Route>
            <Route element={<Login />} path='/login' />
            <Route element={<Signup />} path='/signup' />
          </Routes>
        </BrowserRouter>
      </UserContext>
    </>
  )
}

export default App
