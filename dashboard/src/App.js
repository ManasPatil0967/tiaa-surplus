import React from 'react';
import { Route , Routes } from 'react-router';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import LoginForm from './components/Login';
import SignUpForm from './components/Signup';
import Recommend from './components/Recommend';
import TnC from './components/TnC';

const App = () => { 
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/signup' element={<SignUpForm/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/recommend' element={<Recommend/>} />
          <Route path='/tnc' element={<TnC/>} />

      </Routes>
    </>
  )
}

export default App

