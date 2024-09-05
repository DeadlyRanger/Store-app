//  import React from 'react'

import Courses from "../components/Courses"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
 import item from "../list.json"
// import Home from "../home/Home"

 
 const Coursepg = () => {
    console.log(item)
   return (
     <>
       
      <Navbar />
          <div className="min-h-screen">
            <Courses />
          </div>
      <Footer />
     
     
     </>
   )
 }
 
 export default Coursepg