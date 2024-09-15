import React, { useEffect, useState } from 'react'
import { useNavigate,Link, useParams } from 'react-router-dom'
import axios from "axios";
function SingleBlog() {
    const naviagte=useNavigate();
    const {id}=useParams();
    const [blog,setBlog]=useState({});
    useEffect(()=>{
     const getBlog=async()=>{
      const res=await axios.get(`https://blogappbackend-slhi.onrender.com/api/v1/get/blog/${id}`,{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
      })
      setBlog(res.data);
     }
     getBlog();
    },[])
  return (
    <>
      <div className='container'>
        <div className='row'>
            <h1 className='mt-5'>{blog.title}</h1>
            <p className=''>Published Date:{blog.createdAt}</p>
            
            <img src={`http://localhost:8080/${blog.thumbnail}`} className="img img-rounded img-responsive"></img>
            <p className='mt-5' style={{
              lineHeight:"50px"
            }}>{blog.description}</p>
        </div>
        <Link to="/" className="btn btn-primary btn-md mb-5" >Back to Posts</Link>
      </div>
    </>
  )
}

export default SingleBlog