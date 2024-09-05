// import React from 'react'

 import Home from "../src/home/Home"
import Courses from "./components/Courses"
 import { Route, Routes } from "react-router-dom"
import Coursepg from "./Course/Coursepg"
import Signup from "./components/Signup"
const App = () => {
  return (
    <>
    {/* <Home />
    <Courses /> */}
        <Routes>
           <Route path="/" element ={<Home />} />
           <Route path="/Courses" element ={<Coursepg />} />
           <Route path="/Signup" element ={<Signup />} />
        </Routes>
   </>
  )
}

export default App
