// import React from 'react'

import { Link } from "react-router-dom"
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm()


      
  const onSubmit = (data) => console.log(data)
  return (
     <>
     <div className=" mt-20 flex h-screen item-centr justify-center border-2px shadow-end ">
     <div id="my_modal_3" className="">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <h3 className="font-medium text-2xl text-center text-pink-500">SignUp </h3>
    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
   <div><div className="mt-4 space-y-2">
     <span className="text-semibold px-2 text-lg">Name</span>
     <input type="text" placeholder="Name" className="input input-bordered w-full my-2 px-3 outline-none " 
     
     {...register("name", { required: true })}/>
     
<br />
{errors.email && <span className="text-sm text-red-500 "> This field is required</span>}
   
   </div>

   <div className="mt-4 space-y-2">
     <span className="text-semibold px-2 text-lg">Email</span>
     <input type="email" placeholder="Name" className="input input-bordered w-full my-2 px-3 outline-none "
     {...register("email", { required: true })} />

<br />
{errors.email && <span className="text-sm text-red-500 "> This field is required</span>}
     </div>
     {/* password */}
   <div className="mt-4 space-y-2">
     <span className="text-semibold px-2 text-lg">Enter your password</span>
     <input type="password" placeholder="Password" className="input input-bordered w-full my-2 px-3 outline-none "
     {...register("password", { required: true })} />

<br />
{errors.email && <span className="text-sm text-red-500 "> This field is required</span>}
   
   </div>

   </div>
   
 <div className="justify-center mt-4 text-center">
   <button className=" mt-4 px-4 py-2 bg-pink-500 text-white rounded">Register now </button>
   <p className="mt-4 text-center text-sm">Already have an account ?
    <Link to="/" className="text-pink-500 cursor-pointer"
     onClick={()=>
   { document.getElementById('my_modal_3').showModal()
   }}> SignIn</Link>  
   {" "}  <Login /> </p>
   </div>
   </form>
  </div>
</div>
     </div>
     
     
     </>
  )
}

export default Signup