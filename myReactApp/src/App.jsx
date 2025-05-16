// import { useState } from 'react'
import Login from "./Login"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from "./SignUp"
import Profile from "./Profile"
import {useState,useEffect} from "react"
import {auth} from './Firebase'
// import { Navigate } from "react-router-dom"


import { ToastContainer } from "react-toastify"
function App() {
  const [user,setUser] =useState()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setUser(user)
  })
  })
  

  return (
    <>
    <Router>
      <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="/login" element ={<Login />}/>
        <Route path ="/Sign-up" element ={<Signup />}/>
        <Route path ="/profile" element={<Profile />}/>
      </Routes>
    </Router>
    </>
  )

}
export default App