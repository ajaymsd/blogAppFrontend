import React, { useEffect,useState } from 'react'
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
function Home() {
 
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    const fetAllBlogs=async()=>{
     const res=await axios.get("https://blogappbackend-slhi.onrender.com/api/v1/get/allblogs",{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
     })
     setBlogs(res.data);
    }
     fetAllBlogs();
    })
    const naviagte=useNavigate();
  const handleDelete=async(id)=>{
    
    axios.delete("https://blogappbackend-slhi.onrender.com/api/v1/delete/blog/"+id,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    }).then(res=>alert("Your Blog Deleted Successfully"));
    window.location.reload();
  }
  return (
    <>
    <div className='container p-2'>
      <h1 className='mt-4 '>My Blogs</h1>
      <div className='row mt-5'>

        {blogs && blogs.length>0 ?
         blogs.map((blog)=>(
          <div className='col-lg-4'>
          <div className='card p-3'>
              <img src={`https://blogappbackend-slhi.onrender.com/${blog.thumbnail}`}></img>
              <h4 className='mt-2'>{blog.title}</h4><br></br>
              <Link to={`/blog/${blog._id}`} className='btn btn-primary btn-md'>Read More</Link><br></br>
              <button onClick={()=>{handleDelete(`${blog._id}`)}} className='btn btn-danger btn-md'>Delete Blog</button>
          </div>
      </div>
       )):<div className='text-center mt-5'>
         <h1>You Haven't Added Any Blog </h1>
         <p>Add Your Blog Now</p>
         <Link to={"/add-blog"} className='btn btn-primary btn-md'>Add Blog</Link>
        </div>}
         
      </div>
    </div>
    </>
  )
}

export default Home