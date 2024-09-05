// import React from 'react'
//  import  {} from "react-router-dom"

import Cardss from "./Cardss"
import list from "../list.json"
import {Link} from "react-router-dom"
const Courses = () => {
    console.log()
  return (
    <>

    <div className="`max-w-screen-2xl container mx-auto md:px-20 px-4">
         <div className="mt-28 item-cener justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">We are  delighted to have you  {" "} <span className="text-pink-500"> Here </span> </h1>

            <p className="mt-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, officiis reiciendis cupiditate autem deleniti saepe commodi odit! Id numquam assumenda provident illum eveniet dicta at eaque delectus quam, suscipit quibusdam enim veniam possimus mollitia?</p>

               <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-3 rounded mt-12 hover:bg-pink-600" href = "/Ho">Back</button>
            </Link>
         </div>
          <div className="mt-12 grid-cols-1 md:grid-cols-3 grid gap-4 hover:shadow-md cursor-pointer">
            {
                list.map((item)=>(
                    <Cardss item={item} key = {item.id} />
                ))
            }
          </div>
    </div>

     </>
  )
}

export default Courses