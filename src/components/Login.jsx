// import React from 'react'

import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
const Login = () => {
    const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm()


      
  const onSubmit = (data) => console.log(data)
  return (
   <>
   {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-medium text-2xl text-center ">Login</h3>
    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
   <div><div className="mt-4 space-y-2">
     <span className="text-semibold px-2 text-lg">Email</span>
     <input type="email" placeholder="Email" className="input input-bordered w-full my-2 px-3 outline-none "
     {...register("email", { required: true })} />
    <br />
   {errors.email && <span className="text-sm text-red-500 "> This field is required</span>}
   </div>
     {/* password */}
   <div className="mt-4 space-y-2">
     <span className="text-semibold px-2 text-lg">Enter your password</span>
     <input type="password" placeholder="Password" className="input input-bordered w-full my-2 px-3 outline-none " 
     {...register("password", { required: true })}/>

     <br />
   {errors.password && <span className="text-sm text-red-500">This field is required</span>}

    
   </div>

   </div>
   
 <div className="justify-center mt-4">
   <button className=" mt-4 px-4 py-2 bg-pink-500 text-white rounded">Login </button>
   <p className="mt-2 text-center text-sm">Not registered ?<Link to="signup" className="text-pink-500 cursor-pointer"> SignUp</Link> {" "} </p>
   </div>
</form>
  </div>
</dialog>
   </>
  )
}

export default Login