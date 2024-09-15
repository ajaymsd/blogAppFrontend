import React, { useEffect,useState } from 'react'
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import bgimg from './bgimg.jpg';
import bgimg2 from './homeimg2.jpg';
function Home2() {
 
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    const fetAllBlogs=async()=>{
     const res=await axios.get("https://blogappbackend-slhi.onrender.com/api/v1/get/homeblogs");
     setBlogs(res.data);
    }
     fetAllBlogs();
    })
    const naviagte=useNavigate();
  return (
    <>
    <div className='container-fluid' style={
        {
            height:"500px",
            backgroundImage:`url(${bgimg})`,
            backgroundPosition:"cover",
            backgroundSize:"cover"

        }
    }>
    <div className='banner'>
    <h1 className='banner-head '>Every Day is A Fresh Start</h1><br></br>
    <p className='banner-head1 '>Add Your Ideas and Imagination here..</p>
    </div>
    </div>
    <div className='container-fluid ' style={{
        backgroundColor:"lightgray",
        padding:"60px"

    }}>
      <h3 className='mt-4 '>Latest Posts</h3>
      <div className='row mt-5 'style={{
        rowGap:"30px"
      }}>

        {blogs && blogs.length>0 ?
         blogs.map((blog)=>(
          <div className='col-lg-4 ' >
          <div className='singblog ' style={{
            backgroundColor:"#20262E",
            color:"lightgray",
            borderRadius:"22px",
          }}>
              <img src={`https://blogappbackend-slhi.onrender.com/${blog.thumbnail}`} className="p-0" style={{
                height:"220px",
                width:"450px",
                padding:"none",
                borderRadius:"22px"
              }}></img>
              <br></br>
              <div className='p-3'>
              <h4 className='mt-2  text-uppercase'>{blog.title}</h4>
              <p className='mt-2  '>Created By : {blog.user.username}</p>
              <p className='mt-2  '>Created At : {blog.createdAt}</p>
              <Link to={`/blog/${blog._id}`} className='btn btn-primary btn-md mt-2'>Read More</Link>
              </div>
             
          </div>
      </div>
       )):<div className='text-center mt-5'>
        <h1>Loading...</h1>
        </div>}
         
      </div>
     
    </div>
    <div className='container-fluid ' style={{
        background:`url(${bgimg2})`,
        height:"450px",
        backgroundPosition:"cover",
        backgroundSize:"cover",
        
        color:"white",
        padding:"30px",
        fontSize:"35px",
        
      }}>
        <div style={{
          position:"absolute",
          top:"230%",
          left:"48%",
         
         
        }}>
      <h3 className='banner-3' >Make A Global Connection</h3>
      <p className=''>Contribute to Open Source Now !</p>
      <Link to={"/add-blog"} className='btn btn-md btn-danger '>Create Your Blog</Link>
      </div>
      </div>
      <div className='container-fluid bg-primary p-2'>
        <p className='text-center text-light mt-2'>Copyrights 2023 @ Ajay Mathesh</p>
      </div>
    </>
  )
}

export default Home2