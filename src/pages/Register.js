import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Register() {
  const navigate=useNavigate();
  const [input,setInput]=useState({
    username:'',
    email:'',
    password:''
  })
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
    const res=await axios.post("https://blogappbackend-slhi.onrender.com/api/v1/user/Register",input);
    alert(res.data.message);
    navigate("/login");
    }catch(error){
       alert(error.response.data.message);
    }
  }
  return (
    <>
    <div className='container'>
        <div className='formcontainer container  mt-5 w-50'>
            <h1>Register Here</h1>
            <form className='mt-5' onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type="text"
                name="username"
                value={input.username}
                onChange={(e)=>setInput({...input,username:e.target.value})}
                className='form-control'
                placeholder='Enter Username' /><br></br>

                <label htmlFor='email'>Email</label>
                <input type="text"
                name="email"
                value={input.email}
                onChange={(e)=>setInput({...input,email:e.target.value})}
                className='form-control'
                placeholder='Enter Email' /><br></br>

                <label htmlFor='password'>Password</label>
                <input type="password"
                name="password"
                value={input.password}
                onChange={(e)=>setInput({...input,password:e.target.value})}
                className='form-control'
                placeholder='Enter Password' /><br></br>

                <input type="submit" value="Register" className='btn-md btn-primary btn'/>

            </form>
        </div>
    </div>
    </>
  )
}

export default Register