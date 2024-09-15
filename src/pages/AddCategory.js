import React, { useState } from 'react'
import axios from "axios";
import addblogimg from './addblogimg.jpg';
function AddCategory() {
  const [input,setInput]=useState({
    title:''
  })
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
    const res=await axios.post("https://blogappbackend-slhi.onrender.com/api/v1/add/category",input,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    });
    alert(res.data.message);
    }catch(error){
       alert(error.response.data.message);
    }
  }
  return (
    <>
     <div className='container-fluid' style={{
      background:`URL(${addblogimg})`,
      height:"330px",
      backgroundPosition:"cover",
       backgroundSize:"cover",
       display:"flex",
       justifyContent:"start",
       alignItems:"center",

    }}>
      <h1 className='add-head' style={{
        color:"lightgray",
        fontSize:"50px",
        marginLeft:"13%",
      }}>Add Category</h1>
    </div>
    <div className='container'>
        <div className='formcontainer container  mt-5 w-50'>
            <h1>Add Your Blog Category Here</h1>
            <form className='mt-5' onSubmit={handleSubmit}>
               

                <label htmlFor='category'>Category</label>
                <input type="text"
                name="category"
                value={input.title}
                onChange={(e)=>setInput({...input,title:e.target.value})}
                className='form-control'
                placeholder='Enter Category name' /><br></br>

               

                <input type="submit" value="Add Category" className='btn-md btn-primary btn'/>

            </form>
        </div>
    </div>
    </>
  )
}

export default AddCategory