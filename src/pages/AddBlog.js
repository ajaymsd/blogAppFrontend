import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import addblogimg from './addblogimg.jpg';
function AddBlog() {
  const navigate=useNavigate("/");
  const [input,setInput]=useState({
    title:"",
    category:"",
    description:""
  });
  const [file,setFile]=useState([]);

  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    const fetAllCategories=async()=>{
    const res=await axios.get("https://blogappbackend-slhi.onrender.com/api/v1/get/categories",{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    }
    );
    setCategories(res.data);
   
  };
     fetAllCategories();
  },[]);


  //getting the form data
   const formdata=new FormData();
   formdata.append("title",input.title);
   formdata.append("category",input.category);
   formdata.append("description",input.description);
   formdata.append("thumbnail",file);
   
  const hanldeSubmit=async(e)=>{
     e.preventDefault();
    
     try{
       const res=await axios.post("http://localhost:8080/api/v1/add/blog",formdata,{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
       })
       alert("Blog Added Successfully");
       navigate("/userblog");

     }catch(err){
      alert(err.response.data.message);
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
      }}>Add Blog</h1>
    </div>
    <div className='container'>
        <div className='formcontainer container  mt-5 w-50'>
            <h1>Create Your Blog Here</h1>
            <form className='mt-5' onSubmit={hanldeSubmit}>
               

                <label htmlFor='title'>Title</label>
                <input type="text"
                name="title"
                onChange={(e)=>setInput({...input,title:e.target.value})}
                value={input.title}
                className='form-control'
                placeholder='Enter Blog Tilte' /><br></br>

                <label htmlFor='password'>Category</label>
                <select className='form-control ' name="category"
                 onChange={(e)=>setInput({...input,category:e.target.value})}
                 value={input.category}
                >
                  <option disabled>Select the Category</option>
                   { categories && categories.map((item)=>{
                    return <option  value={item._id}>{item.title}</option>
                   })} 
                  
                </select><br></br>

                <label htmlFor='description'>Description</label>
                <textarea name="description" className='form-control' rows="10"
                 onChange={(e)=>setInput({...input,description:e.target.value})}
                 value={input.description}
                >

                </textarea><br></br>

                <label htmlFor='thumbnail'>Thumbnail</label>
                <input type='file' className='form-control' 
                onChange={(e)=>setFile(e.target.files[0])}
                name="thumbnail"></input><br></br>
              

                <input type="submit" value="Add Blog" className='btn-md btn-primary btn'/>

            </form>
        </div>
    </div>
    </>
  )
}

export default AddBlog